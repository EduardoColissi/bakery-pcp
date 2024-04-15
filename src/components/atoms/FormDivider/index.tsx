import { Divider } from "antd";
import { FormDividerProps } from "./types";

const FormDivider = ({ title }: FormDividerProps) => {
  return (
    <Divider plain={false} orientation="left">
      {title}
    </Divider>
  );
};

export default FormDivider;
