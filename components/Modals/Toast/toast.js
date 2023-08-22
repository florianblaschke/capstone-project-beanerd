import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";
import { useToast } from "./toastContext";

const types = {
  success: {
    color: "green",
  },
  error: {
    color: "red",
  },
};

export default function ToastMessage({ id, message, type }) {
  const toast = useToast();
  const { color } = types[type];
  const timer = useRef(null);
  function autoDelete() {
    toast.removeToast(id);
  }

  useEffect(() => {
    timer.current = setTimeout(() => {
      autoDelete();
    }, 3000);

    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <ToastDiv id={id} $outlineColor={color}>
      {message}
    </ToastDiv>
  );
}

const fadeInOut = keyframes`
0% {
  transform: translateY(-100%);
  opacity: 0;
}

50% {
  transform: translateY(0%);
  opacity: 1;
}

100%{
  transform: translateX(-100%);
  opacity: 0;
}
`;

const ToastDiv = styled.div`
  outline: solid ${(props) => props.$outlineColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  border-radius: 8px;
  border: 0.5px solid #000;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 90vw;
  height: 8vh;
  margin: 8px;
  animation: ${fadeInOut} 4s cubic-bezier(0, 0.99, 0.21, 1.01) forwards;
`;
