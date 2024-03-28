import { toast } from "react-toastify";
import { ToastProps } from "./types";

export const Success = ({ message }: ToastProps) => {
  toast.success(message, {
    theme: "light",
    position: "bottom-right",
    pauseOnFocusLoss: false,
    autoClose: 5000,
    toastId: "success",
  });
};
