import styled from "styled-components";

export default function BrewMethod({ method, coffee, water, time, grind }) {
  return (
    <StyTable>
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
    </StyTable>
  );
}

const StyTable = styled.table`
  text-align: center;
  border-radius: 8px;
  line-height: 16px;
  border: solid black 0.5px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
  font-size: 0.75rem;
  width: 100%;
`;
