import { Col, Row } from "antd";
import { FormProps } from "./types";
import Button from "../../atoms/Button";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Form = ({
  title,
  children,
  onCancel,
  onSubmit,
  onSubmitLoading,
}: FormProps) => {
  return (
    <>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <h1>{title}</h1>
        </Col>
        {children}
      </Row>
      <Row justify="end" gutter={[12, 12]}>
        <Button
          label="Cancelar"
          type="primary"
          danger
          onClick={onCancel}
          colSize={2.5}
          icon={<MdCancel />}
        />
        <Button
          label="Salvar"
          type="primary"
          onClick={onSubmit}
          loading={onSubmitLoading}
          colSize={2.5}
          icon={<FaCheckCircle />}
        />
      </Row>
    </>
  );
};

export default Form;
