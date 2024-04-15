import { toast } from "react-toastify";
import { ToastProps } from "./types";

export const Toast = ({ message, type, toastId }: ToastProps) => {
  switch (type) {
    case "success":
      toast.success(message, {
        theme: "light",
        position: "top-center",
        pauseOnFocusLoss: false,
        autoClose: 5000,
        toastId: toastId,
      });
      break;
    case "error":
      toast.error(message, {
        theme: "light",
        position: "top-center",
        pauseOnFocusLoss: false,
        autoClose: 5000,
        toastId: toastId,
      });
      break;
    case "info":
      toast.info(message, {
        theme: "light",
        position: "top-center",
        pauseOnFocusLoss: false,
        autoClose: 5000,
        toastId: toastId,
      });
      break;
    case "warning":
      toast.warning(message, {
        theme: "light",
        position: "top-center",
        pauseOnFocusLoss: false,
        autoClose: 5000,
        toastId: toastId,
      });
      break;
    default:
      toast.info(message, {
        theme: "light",
        position: "top-center",
        pauseOnFocusLoss: false,
        autoClose: 5000,
        toastId: toastId,
      });
      break;
  }
};
