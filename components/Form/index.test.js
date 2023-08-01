import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from ".";

test("form gets displayed with all inputs fields", () => {
  render(<Form />);
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const roasterInput = screen.getByRole("textbox", { name: /röster/i });
  const provenanceInput = screen.getByRole("textbox", { name: /herkunft/i });
  const slider = screen.getByRole("slider", { name: "Arabica 0 / 0 Robusta" });
  const levelInput = screen.getByRole("combobox", { name: /röstgrad/i });
  const submitButton = screen.getByRole("button", { name: /speichern/i });

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
    screen.getByRole("combobox", { name: /röstgrad/i }),
    ["medium"]
  );
  expect(
    screen.getByRole("combobox", { name: /röstgrad/i })
  ).toHaveDisplayValue("medium");
});
