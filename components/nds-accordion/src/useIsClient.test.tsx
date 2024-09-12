// useIsClient.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { useIsClient } from "./useIsClient";
import { renderToString } from "react-dom/server";

// Test component that uses the useIsClient hook
const TestComponent = () => {
	const isClient = useIsClient();
	return (
		<div data-testid="client-status">{isClient ? "Client" : "Server"}</div>
	);
};

describe("useIsclient", () => {
	test("useIsClient returns false initially (JavaScript disabled/server rendered)", () => {
		//mimic serverside rendered elements, and as if JS disabled
		expect(renderToString(<TestComponent />)).toContain("Server");
	});

	test("useIsClient returns true after useEffect runs (JavaScript enabled)", () => {
		const { getByTestId } = render(<TestComponent />);
		const clientStatus = getByTestId("client-status");
		expect(clientStatus.textContent).toBe("Client");
	});
});
