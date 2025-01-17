import Card from "@components/Card";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("Card", () => {
  test("renders heading", async () => {
    render(<Card />);
    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Card />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });
});
