export interface InputProps {
  placeholder: string;
  value: any;
  onChange: (e: any) => void;
  type: string;
  maxLength: number;
  label: string;
  icon?: React.ReactNode;
  passwordField?: boolean;
  name: string;
  errorText?: string;
  colSize: number;
  required?: boolean;
}
