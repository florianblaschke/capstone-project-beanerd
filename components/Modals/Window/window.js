import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export default function Window({ children, onClose }) {
  const modalWindow = useRef();

  function backDropHandler(event) {
    if (!modalWindow.current.contains(event.target)) {
      onClose();
    }
  }

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("click", backDropHandler);
    });
    return () => window.removeEventListener("click", backDropHandler);
  }, []);

  const Modal = (
    <StyledModalWrapper>
      <StyledModalBox ref={modalWindow}>{children}</StyledModalBox>
    </StyledModalWrapper>
  );

  return ReactDOM.createPortal(Modal, document.getElementById("modal-root"));
}

const StyledModalWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(248, 248, 255, 0.5);
`;

const StyledModalBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 16px;
  height: min-content;
  width: 90vw;
  border-radius: 8px;
  background: white;
  border: 0.5px solid #000;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
`;
