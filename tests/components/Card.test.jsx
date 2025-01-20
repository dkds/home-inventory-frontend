import { Card } from "@components/card";
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

  test("renders image if image is provided", async () => {
    const testImage = "test-image";
    const { container } = render(<Card image={testImage} />);
    const imageElements = container.getElementsByClassName("card__image");
    expect(imageElements.length > 0).toBeTruthy();
    const imageElement = imageElements[0];
    expect(imageElement).toBeVisible();
    expect(imageElement).toHaveAttribute("src", testImage);
  });
  test("doesn't render image if image is NOT provided", async () => {
    const { container } = render(<Card />);
    const imageElements = container.getElementsByClassName("card__image");
    expect(imageElements.length === 0).toBeTruthy();
  });

  test("renders children if is provided", async () => {
    const testContent = (
      <Card.Content>
        <div id="test-id">
          <p>Test content</p>
        </div>
      </Card.Content>
    );
    const { container } = render(<Card>{testContent}</Card>);
    const childElements = container.getElementsByClassName("card__content");
    expect(childElements.length > 0).toBeTruthy();
    const childElement = childElements[0];
    expect(childElement).toBeVisible();
    expect(childElement.firstChild.id).toBe("test-id");
    expect(childElement.firstChild.firstChild).toHaveTextContent(
      "Test content"
    );
  });
  test("doesn't render children if NOT provided", async () => {
    const { container } = render(<Card />);
    const imageElements = container.getElementsByClassName("card__content");
    expect(imageElements.length === 0).toBeTruthy();
  });
});
