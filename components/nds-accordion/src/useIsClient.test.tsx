// useIsClient.test.tsx

/* NOTE: import and global setup for TextEncoder/TextDecoder
	workaround for error: ReferenceError: TextEncoder is not defined
	https://github.com/testing-library/dom-testing-library/issues/1245
	https://github.com/jsdom/jsdom/issues/2524#issuecomment-897707183
*/

const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

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
