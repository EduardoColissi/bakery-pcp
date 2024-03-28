import { Col, Button as AntdButton } from "antd";

import { Props } from "./types";

const Button = ({
  label,
  onClick,
  type = "primary",
  colSize,
  loading = false,
  danger = false,
  disabled = false,
  icon,
}: Props) => {
  return (
    <Col span={colSize}>
      <AntdButton
        type={type}
        onClick={onClick}
        loading={loading}
        danger={danger}
        icon={icon}
        disabled={disabled}
      >
        {label}
      </AntdButton>
    </Col>
  );
};

export default Button;
