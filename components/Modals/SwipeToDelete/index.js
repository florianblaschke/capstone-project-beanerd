import styled from "styled-components";
import { useRef } from "react";

export default function SwipeToDelete({ children, onDelete }) {
  const ref = useRef();
  let initialX;
  let movementX = 0;

  function horizontalMovement(event) {
    const mouseX = event.clientX;
    movementX = initialX - mouseX;
    if (movementX > 5) {
      ref.current.style.transform = `translate(-${movementX}px)`;
    }
  }

  function swipe(event) {
    initialX = event.clientX;
    ref.current.addEventListener("pointermove", horizontalMovement);
  }

  function cancel() {
    if (movementX >= 255) {
      ref.current.style.transform = `translate(-${window.innerWidth}px)`;
      ref.current.style.transition = `transform 0.5s`;
      setTimeout(() => {
        onDelete();
      }, 500);
    } else {
      ref.current.removeEventListener("pointermove", horizontalMovement);
      ref.current.style.transition = "transform 1s";
      ref.current.style.transform = "translate(0px)";
      setTimeout(() => {
        if (ref.current) ref.current.style.transition = "";
      }, 1000);
    }
  }

  const Wrapper = ({ children }) => {
    return (
      <WrapperBox
        ref={ref}
        onPointerDown={(event) => swipe(event)}
        onPointerOut={() => cancel()}
      >
        <Visible>{children}</Visible>
        <Invisible type="button">Delete</Invisible>
      </WrapperBox>
    );
  };

  return (
    <Box>
      <Wrapper>{children}</Wrapper>
    </Box>
  );
}

const Box = styled.div`
  width: 80vw;
  overflow: hidden;
  touch-action: none;
`;

const WrapperBox = styled.div`
  display: flex;
`;

const Visible = styled.div`
  flex: 1 0 100%;
`;

const Invisible = styled.div`
  border: none;
  background-color: red;
  flex: 1 0 200%;
  display: flex;
  align-items: center;
`;
