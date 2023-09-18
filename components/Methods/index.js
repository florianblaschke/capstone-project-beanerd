import { StyledTable } from "@/lib/styled-components";

export default function BrewMethod({
  showModal,
  method,
  coffee,
  water,
  time,
  grind,
}) {
  return (
    <StyledTable onClick={showModal}>
      <thead>
        <tr>
          <th>Method</th>
          <th>Coffee / Water</th>
          <th>Time</th>
          <th>Grind</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{method}</td>
          <td>
            {coffee}
            {"g "}
            {": "}
            {water}
            {"g"}
          </td>
          <td>
            {time}
            {" sec"}
          </td>
          <td>{grind}</td>
        </tr>
      </tbody>
    </StyledTable>
  );
}
