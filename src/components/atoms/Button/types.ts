export interface Props {
  type: "primary" | "link" | "text" | "default" | "dashed" | undefined;
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
  colSize: number;
  loading?: boolean;
  danger?: boolean;
  disabled?: boolean;
}
