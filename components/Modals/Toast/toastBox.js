import styled from "styled-components";
import ToastMessage from "./toast";

export default function ToastWrapper({ toasts }) {
  return (
    <ToastContainer>
      {toasts.map((toast) => (
        <ToastMessage
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
        />
      ))}
    </ToastContainer>
  );
}

const ToastContainer = styled.div`
  display: flex;
  flex-flow: column-reverse;
  position: fixed;
  top: 0px;
  width: 100%;
  align-items: center;
  font-size: 1.2rem;
  z-index: 2;
`;
