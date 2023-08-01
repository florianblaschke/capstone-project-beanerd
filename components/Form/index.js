import { styled } from "styled-components";
import { useState } from "react";

export default function Form({ onSubmit }) {
  const [arabica, setArabica] = useState(0);
  const [robusta, setRobusta] = useState(0);

  function showRatio(event) {
    let ara = event.target.value;
    let rob = 100 - ara;

    setArabica(ara);
    setRobusta(rob);
  }

  return (
    <StyForm onSubmit={onSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" min="0" max="24" id="name" name="name" />
      <label htmlFor="roaster">Röster:</label>
      <input type="text" min="1" max="32" id="roaster" name="roaster" />
      <label htmlFor="arabica">
        Arabica {arabica} / {robusta} Robusta
      </label>
      <input
        onChange={showRatio}
        type="range"
        min="0"
        max="100"
        step="5"
        id="arabica"
        name="arabica"
      />
      <label htmlFor="level">Röstgrad:</label>
      <select id="level" name="level">
        <option value="light">light</option>
        <option value="medium">medium</option>
        <option value="dark">dark</option>
      </select>
      <label htmlFor="provenance">Herkunft:</label>
      <input type="text" id="provenance" name="provenance" />
      <button>Speichern</button>
    </StyForm>
  );
}

const StyForm = styled.form`
  display: flex;
  flex-flow: column wrap;
`;
