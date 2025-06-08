import { getByText } from "@testing-library/dom";
import buttonComponent from "./button";

function createRootDiv() {
  const rootDiv = document.createElement("div");
  rootDiv.id = "root";
  document.body.appendChild(rootDiv);
  return rootDiv;
}

describe("Button Test Suite", function () {
  let rootDiv: HTMLElement;
  beforeAll(() => {
    rootDiv = createRootDiv();
  });

  test("button with content Test should exist on the Document", () => {
    const buttonToTest = buttonComponent({
      id: "test-button",
      content: "Test",
    });

    rootDiv.innerHTML += buttonToTest;
    expect(getByText(rootDiv, "Test")).toBeTruthy();
  });
});
