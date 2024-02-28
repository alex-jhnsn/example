import { render, screen } from "@testing-library/react";

import Example from "./Example";

describe("Example", () => {
  it("Should return Hello, world!", () => {
    render(<Example />);

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });
});
