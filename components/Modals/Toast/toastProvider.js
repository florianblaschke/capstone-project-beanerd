import { createContext, useContext, useReducer } from "react";
import { uid } from "uid";
import ToastWrapper from "./toastBox";

const ToastContext = createContext();
export function useToast() {
  return useContext(ToastContext);
}

export default function ToastContextProvider({ children }) {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  function addToast(type, message) {
    const id = uid(5);
    dispatch({ type: "ADD", payload: { type, message, id } });
  }

  function removeToast(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  function successToast(message) {
    addToast("success", message);
  }

  function errorToast(message) {
    addToast("error", message);
  }

  const value = { successToast, errorToast, removeToast };

  return (
    <ToastContext.Provider value={value}>
      <ToastWrapper toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
}

function toastReducer(toasts, action) {
  switch (action.type) {
    case "ADD": {
      return [...toasts, action.payload];
    }
    case "REMOVE": {
      const filteredToasts = toasts.filter(
        (toast) => toast.id !== action.payload
      );
      return [...filteredToasts];
    }
    default:
      throw new Error("Unknown action type!");
  }
}
