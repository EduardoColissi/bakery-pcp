import * as React from "react";

export interface FormProps {
  title: string;
  children: React.ReactNode;
  onCancel: () => void;
  onSubmit: () => void;
  onSubmitLoading: boolean;
}
