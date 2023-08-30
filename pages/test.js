import styled from "styled-components";
import ReactDOM, { useRef } from "react";

export default function Area51() {
  const ref = useRef();
  let initialX;
  let initialY;

  function horizontalMovement(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const movementX = initialX - mouseX;
    const movementY = initialY - mouseY;
    console.log(movementX);

    if (movementX < 0) {
      setTimeout(() => {
        ref.current.removeEventListener("pointermove", horizontalMovement);
        console.log(movementX);
        if (movementX > 0) {
          ref.current.addEventListener("pointermove", horizontalMovement);
        }
        console.log("jupp");
      }, 3000);
      initialX = event.clientX;
      /* console.log("after cancel", initialX); */
    }
  }

  function swipe(event) {
    initialX = event.clientX;
    initialY = event.clientY;
    console.log("initialY", initialY);
    console.log("initalX", initialX);
    ref.current.addEventListener("pointermove", horizontalMovement);
  }

  return (
    <StyledDiv
      id="swipe-root"
      ref={ref}
      onPointerEnter={(event) => swipe(event)}
      onPointerOut={() =>
        ref.current.removeEventListener("pointermove", horizontalMovement)
      }
    >
      Hello
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  position: relative;
  border: solid 1px;
  background-color: blue;
  width: 70vw;
  height: 10vh;
  margin: 50px 0px 0px 50px;
  touch-action: none;
`;
