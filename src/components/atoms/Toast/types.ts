export interface ToastProps {
  message: string;
  type: "success" | "error" | "info" | "warning";
  toastId?: string;
}
