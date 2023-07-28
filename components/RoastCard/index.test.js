import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RoastCard from "./index";

const exampleArray = [
  {
    name: "Fazenda Matão",
    roaster: "Good Karma",
    score: [50, 100],
  },
  {
    name: "Günter",
    roaster: "Günter Coffee Roasters",
    score: [90],
  },
  {
    name: "Mexico Finca Santa Anita",
    roaster: "CULTD- Coffee Unlimited",
    score: [],
  },
];

const exampleObject = {
  name: "Fazenda Matão",
  roaster: "Good Karma",
  score: [50, 100],
};

test("renders a card with name, roaster and score", () => {
  render(
    <RoastCard
      name={exampleObject.name}
      roaster={exampleObject.roaster}
      score={exampleObject.score}
    />
  );
  const name = screen.getByRole("heading", { name: /fazenda matão/i });
  expect(name).toHaveTextContent("Fazenda Matão");
  const roaster = screen.getByText(/good karma/i);
  expect(roaster).toHaveTextContent("Good Karma");
  const score = screen.getByText(/75/i);
  expect(score).toHaveTextContent("75");
});

test("renders all roasts", () => {
  render(
    exampleArray.map((roast) => (
      <RoastCard
        name={roast.name}
        roaster={roast.roaster}
        score={roast.score}
      />
    ))
  );
  const roasts = screen.getAllByRole("heading");
  expect(roasts.length).toBe(3);
});
