import styled from "styled-components";
import { useRef } from "react";

export default function SwipeToDelete({ children, onDelete }) {
  const ref = useRef();
  let initialX;
  let deleteIntention = false;

  function horizontalMovement(event) {
    const mouseX = event.clientX;
    const movementX = initialX - mouseX;
    if (movementX > 5) {
      ref.current.style.transform = `translate(-${movementX}px)`;

      if (movementX > window.innerWidth / 2) {
        deleteIntention = true;
        ref.current.removeEventListener("pointermove", horizontalMovement);
        ref.current.style.transform = `translate(-${window.innerWidth}px)`;
        ref.current.style.transition = `transform 0.5s`;
        onDelete();
      }
    }
  }

  function swipe(event) {
    initialX = event.clientX;
    ref.current.addEventListener("pointermove", horizontalMovement);
  }

  function cancel() {
    if (deleteIntention) return;
    ref.current.removeEventListener("pointermove", horizontalMovement);
    ref.current.style.transition = "transform 1s";
    ref.current.style.transform = "translate(0px)";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 1000);
  }

  const Wrapper = ({ children }) => {
    return (
      <WrapperBox
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
  border: 0px;
  overflow: hidden;
  touch-action: none;
  border-radius: 8px;
`;

const WrapperBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Visible = styled.div`
  flex: 1 0 100%;
`;

const Invisible = styled.button`
  border: none;
  background-color: red;
  flex: 1 0 100%;
  text-align: left;
`;
