import { useState } from "react";
import Input from "../../atoms/Input";
import ColorPicker from "../../atoms/ColorPicker";
import FormDivider from "../../atoms/FormDivider";
import Form from "../../molecules/Form";
import { cnpjMask } from "../../../utils/formatters/cnpj";
import { phoneMask } from "../../../utils/formatters/phone";
import { handleColorProps, addressStateProps, colorStateProps } from "./types";
import { companyService } from "../../../services/companyService";
import { findErrorObjectByState } from "../../../utils/findErrorObjectByState";
import { api } from "../../../services/api";

const CreateCompanyForm = () => {
  const [name, setName] = useState<string>("");
  const [fantasyName, setFantasyName] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [colors, setColors] = useState<colorStateProps>({
    primaryColor: "",
    secondaryColor: "",
  });
  const [address, setAddress] = useState<addressStateProps>({
    street: "",
    number: 0,
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState([]);

  const [submitLoading, setSubmitLoading] = useState<boolean>(false);

  const handleColorChange = ({ color, switchValue }: handleColorProps) => {
    const hexString = typeof color === "string" ? color : color.toHexString();
    switch (switchValue) {
      case 1:
        setColors({
          ...colors,
          primaryColor: hexString,
        });
        break;
      case 2:
        setColors({
          ...colors,
          secondaryColor: hexString,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    setSubmitLoading(true);
    const data = {
      name,
      fantasyName,
      cnpj,
      email,
      cellphone,
      address,
      colors,
    };
    const resp = await companyService.createCompany(data);
    setErrors(resp);
    setSubmitLoading(false);
  };

  console.log(errors);

  const handleCancel = () => {
    console.log("Cancel");
  };

  return (
    <Form
      title="Cadastrar empresa"
      onSubmit={handleSubmit}
      onSubmitLoading={submitLoading}
      onCancel={handleCancel}
    >
      <FormDivider title="Dados da empresa" />
      <Input
        label="Razão social"
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        placeholder="Eduardo Desenvolvimento de Software LTDA."
        value={name}
        maxLength={200}
        colSize={8}
        required
        errorText={findErrorObjectByState(errors, "name")?.message}
      />
      <Input
        label="Nome fantasia"
        type="text"
        name="fantasyName"
        onChange={(e) => setFantasyName(e.target.value)}
        placeholder="Eduardo Tech"
        value={fantasyName}
        maxLength={200}
        colSize={8}
        required
        errorText={findErrorObjectByState(errors, "fantasyName")?.message}
      />
      <Input
        label="CNPJ"
        type="text"
        name="cnpj"
        onChange={(e) => setCnpj(e.target.value)}
        placeholder="00.000.000/0000-00"
        value={cnpjMask(cnpj)}
        maxLength={18}
        colSize={4}
        required
        errorText={findErrorObjectByState(errors, "cnpj")?.message}
      />
      <FormDivider title="Dados de contato" />
      <Input
        label="E-mail"
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="emailprincipal@empresa.com"
        value={email}
        maxLength={50}
        colSize={6}
        required
        errorText={findErrorObjectByState(errors, "email")?.message}
      />
      <Input
        label="Telefone"
        type="text"
        name="cellphone"
        onChange={(e) => setCellphone(e.target.value)}
        placeholder="(51)90000-0000"
        value={phoneMask(cellphone)}
        maxLength={14}
        colSize={4}
        required
        errorText={findErrorObjectByState(errors, "cellphone")?.message}
      />
      <FormDivider title="Endereço" />
      <Input
        label="Logradouro"
        type="text"
        name="street"
        onChange={(e) =>
          setAddress({
            ...address,
            street: e.target.value,
          })
        }
        placeholder="Rua Freire Alemão"
        value={address.street}
        maxLength={100}
        colSize={6}
        required
        errorText={findErrorObjectByState(errors, "street")?.message}
      />
      <Input
        label="Número"
        type="text"
        name="number"
        onChange={(e) => setAddress({ ...address, number: e.target.value })}
        placeholder="100"
        value={address.number}
        maxLength={10}
        colSize={3}
        required
        errorText={findErrorObjectByState(errors, "number")?.message}
      />
      <Input
        label="Complemento"
        type="text"
        name="complement"
        onChange={(e) => setAddress({ ...address, complement: e.target.value })}
        placeholder="Apto 101"
        value={address.complement}
        maxLength={100}
        colSize={4}
      />
      <Input
        label="Bairro"
        type="text"
        name="neighborhood"
        onChange={(e) =>
          setAddress({ ...address, neighborhood: e.target.value })
        }
        placeholder="Mont Serrat"
        value={address.neighborhood}
        maxLength={100}
        colSize={6}
        required
        errorText={findErrorObjectByState(errors, "neighborhood")?.message}
      />
      <Input
        label="Cidade"
        type="text"
        name="city"
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
        placeholder="Porto Alegre"
        value={address.city}
        maxLength={100}
        colSize={5}
        required
        errorText={findErrorObjectByState(errors, "city")?.message}
      />
      <Input
        label="Estado"
        type="text"
        name="state"
        onChange={(e) => setAddress({ ...address, state: e.target.value })}
        placeholder="RS"
        value={address.state}
        maxLength={2}
        colSize={3}
        required
        errorText={findErrorObjectByState(errors, "state")?.message}
      />
      <FormDivider title="Configurações do sistema" />
      <ColorPicker
        label="Cor principal"
        initialColor={colors.primaryColor}
        onColorChange={(color) => handleColorChange({ color, switchValue: 1 })}
        colSize={2.5}
        required
        errorText={findErrorObjectByState(errors, "primaryColor")?.message}
      />
      <ColorPicker
        label="Cor secundária"
        initialColor={colors.secondaryColor}
        onColorChange={(color) => handleColorChange({ color, switchValue: 2 })}
        colSize={2.5}
        required
        errorText={findErrorObjectByState(errors, "secondaryColor")?.message}
      />
    </Form>
  );
};

export default CreateCompanyForm;
