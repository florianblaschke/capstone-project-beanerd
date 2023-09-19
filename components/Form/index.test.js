import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from ".";

test("form gets displayed with all inputs fields", () => {
  render(<Form />);
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const roasterInput = screen.getByRole("textbox", { name: /roaster/i });
  const provenanceInput = screen.getByRole("textbox", { name: /origin/i });
  const slider = screen.getByRole("slider", {
    name: "Arabica 50 / 50 Robusta",
  });
  const levelInput = screen.getByRole("combobox", { name: /roast level/i });
  const submitButton = screen.getByRole("button", { name: /save/i });

  expect(nameInput).toBeInTheDocument();
  expect(roasterInput).toBeInTheDocument();
  expect(provenanceInput).toBeInTheDocument();
  expect(slider).toBeInTheDocument();
  expect(levelInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("select-element returns the right value", async () => {
  const user = userEvent.setup();
  render(<Form />);
  await user.selectOptions(
    screen.getByRole("combobox", { name: /roast level/i }),
    ["medium"]
  );
  expect(
    screen.getByRole("combobox", { name: /roast level/i })
  ).toHaveDisplayValue("medium");
});
