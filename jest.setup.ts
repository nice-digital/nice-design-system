import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "jest-extended";

/* NOTE: import and global setup for TextEncoder/TextDecoder
	workaround for error:
	ReferenceError: TextEncoder is not defined in isUseClient
	https://github.com/testing-library/dom-testing-library/issues/1245
	https://github.com/jsdom/jsdom/issues/2524#issuecomment-897707183

	related to useIsClient, Accordion and Accordiongroup tests

*/
import { TextEncoder, TextDecoder as NodeTextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = NodeTextDecoder as typeof TextDecoder;

jest.mock("react", () => ({
	...jest.requireActual("react"),
	useId: () => "r:id"
}));
