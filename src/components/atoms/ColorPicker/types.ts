export interface PickerProps {
  value: string;
  onChange: (e: any) => void;
  label: string;
  errorText?: string;
  colSize: number;
  required?: boolean;
}
