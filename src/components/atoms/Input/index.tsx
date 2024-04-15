import { Input as AntdInput, Typography, Col } from "antd";
import { InputProps } from "./types";
import { Container } from "./style";

const { Text } = Typography;

const Input = ({
  placeholder,
  value,
  onChange,
  type,
  maxLength = 150,
  label,
  icon,
  passwordField = false,
  name,
  errorText,
  colSize,
  required = false,
}: InputProps) => {
  function requiredField() {
    return <Text type="danger">*</Text>;
  }

  if (passwordField === true) {
    return (
      <Col span={colSize}>
        <Container>
          <Text>
            {required && requiredField()} {label}
          </Text>
          <AntdInput.Password
            name={name}
            prefix={icon}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            maxLength={maxLength}
            style={{ marginTop: 5 }}
            status={errorText ? "error" : ""}
          />
          <Text type="danger">{errorText}</Text>
        </Container>
      </Col>
    );
  } else {
    return (
      <Col span={colSize}>
        <Container>
          <Text>
            {required && requiredField()} {label}
          </Text>
          <AntdInput
            name={name}
            prefix={icon}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            maxLength={maxLength}
            style={{ marginTop: 5 }}
            status={errorText ? "error" : ""}
          />
          <Text type="danger">{errorText}</Text>
        </Container>
      </Col>
    );
  }
};

export default Input;
