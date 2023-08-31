import styled from "styled-components";
import { useRef } from "react";

export default function SwipeToDelete({ children }) {
  const ref = useRef();
  let initialX;

  function horizontalMovement(event) {
    const mouseX = event.clientX;
    const movementX = initialX - mouseX;
    if (movementX > 5) {
      ref.current.style.transform = `translate(-${movementX}px)`;
    }

    if (movementX < -20) {
      ref.current.style.transform = "translate(0px)";
      ref.current.removeEventListener("pointermove", horizontalMovement);
    }
  }

  function swipe(event) {
    initialX = event.clientX;
    ref.current.addEventListener("pointermove", horizontalMovement);
  }

  function cancel() {
    ref.current.removeEventListener("pointermove", horizontalMovement);
    ref.current.style.transform = "translate(0px)";
  }

  const Wrapper = ({ children }) => {
    return (
      <WrapperBox
        id="swipe-root"
        ref={ref}
        onPointerDown={(event) => swipe(event)}
        onPointerOut={() => cancel()}
      >
        <Visible>{children}</Visible>
        <Invisible>Löschen</Invisible>
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
  border: 1px solid;
  overflow: hidden;
`;

const WrapperBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Visible = styled.div`
  flex: 1 0 100%;
  background-color: blue;
`;

const Invisible = styled.button`
  border: none;
  background-color: pink;
  flex: 1 0 100%;
`;
