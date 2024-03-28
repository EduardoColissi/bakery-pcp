import { toast } from "react-toastify";
import { ToastProps } from "./types";

export const Error = ({ message }: ToastProps) => {
  toast.error(message, {
    theme: "light",
    position: "bottom-right",
    pauseOnFocusLoss: false,
    autoClose: 5000,
    toastId: "error",
  });
};
