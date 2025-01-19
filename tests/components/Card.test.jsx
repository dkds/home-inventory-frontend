import Card from "@components/Card";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("Card", () => {
  test("renders title if title is provided", async () => {
    const testTitle = "Test title";
    const { container } = render(<Card title={testTitle} />);
    const titleElements = container.getElementsByClassName("card__title");
    expect(titleElements.length > 0).toBeTruthy();
    const titleElement = titleElements[0];
    expect(titleElement).toBeVisible();
    expect(titleElement).toHaveTextContent(testTitle);
  });
  test("doesn't render title if title is NOT provided", async () => {
    const { container } = render(<Card />);
    const titleElements = container.getElementsByClassName("card__title");
    expect(titleElements.length === 0).toBeTruthy();
  });
});
