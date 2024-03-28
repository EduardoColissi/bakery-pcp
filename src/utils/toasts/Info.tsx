import { toast } from "react-toastify";
import { ToastProps } from "./types";

export const Info = ({ message }: ToastProps) => {
  toast.info(message, {
    theme: "light",
    position: "bottom-right",
    pauseOnFocusLoss: false,
    autoClose: 5000,
    toastId: "info",
  });
};
