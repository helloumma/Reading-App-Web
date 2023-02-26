import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Result from "./Result";

it("renders correctly", () => {
	const result = render(<Result data={[]} />);
	expect(result).toMatchSnapshot();
});
