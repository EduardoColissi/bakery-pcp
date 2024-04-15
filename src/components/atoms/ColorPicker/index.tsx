import React, { useState, useCallback } from "react";
import { ColorPicker as Picker, Col, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Container } from "./style";
import type { ColorPickerProps, GetProp } from "antd";

type Color = GetProp<ColorPickerProps, "value">;
type Format = GetProp<ColorPickerProps, "format">;

interface HexCaseProps {
  label: string;
  errorText?: string;
  colSize: number;
  required?: boolean;
  initialColor?: Color;
  onColorChange?: (color: Color) => void;
}

const ColorPicker = ({
  onColorChange,
  label,
  errorText = "",
  colSize,
  required = false,
  initialColor = "#1677ff",
}: HexCaseProps) => {
  const { Text } = Typography;

  const [open, setOpen] = useState<boolean>(false);

  function requiredField() {
    return <Text type="danger">*</Text>;
  }

  const [colorHex, setColorHex] = useState<Color>(initialColor);
  const [formatHex, setFormatHex] = useState<Format>("hex");

  const handleChange = useCallback(
    (newColor: Color) => {
      setColorHex(newColor);
      if (onColorChange) {
        onColorChange(newColor);
      }
    },
    [onColorChange]
  );

  const hexString = React.useMemo<string>(
    () => (typeof colorHex === "string" ? colorHex : colorHex?.toHexString()),
    [colorHex]
  );

  return (
    <Col span={colSize}>
      <Container>
        <Text>
          {required && requiredField()} {label}
        </Text>
        <Picker
          open={open}
          onOpenChange={setOpen}
          showText={(color) => (
            <>
              <span>{color.toHexString()}</span>
              <DownOutlined
                rotate={open ? 180 : 0}
                style={{
                  color: "rgba(0, 0, 0, 0.25)",
                }}
              />
            </>
          )}
          disabledAlpha
          format={formatHex}
          value={colorHex}
          onChange={handleChange}
          onFormatChange={setFormatHex}
        />
        <Text type="danger">{errorText}</Text>
      </Container>
    </Col>
  );
};

export default ColorPicker;
