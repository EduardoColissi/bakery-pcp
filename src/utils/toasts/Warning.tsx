import { toast } from "react-toastify";
import { ToastProps } from "./types";

export const Warning = ({ message }: ToastProps) => {
  toast.warning(message, {
    theme: "light",
    position: "bottom-right",
    pauseOnFocusLoss: false,
    autoClose: 5000,
    toastId: "warning",
  });
};
