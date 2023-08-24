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
          <th>Methode</th>
          <th>Kaffee / Wasser</th>
          <th>Brühzeit</th>
          <th>Mahlgrad</th>
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
            {" sek"}
          </td>
          <td>{grind}</td>
        </tr>
      </tbody>
    </StyledTable>
  );
}
