import { api } from "./api";
import { Toast } from "../components/atoms/Toast";

interface CompanyProps {
  name: string;
  fantasyName: string;
  cnpj: string;
  email: string;
  cellphone: string;
  address: {
    street: string;
    number: number;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  colors: {
    primaryColor: string;
    secondaryColor: string;
  };
}

export const companyService = {
  async getCompanies() {
    return await api.get("/companies");
  },
  async getCompany(id: string) {
    return await api.get(`/companies/${id}`);
  },
  async createCompany(data: CompanyProps) {
    try {
      const response = await api.post("/company", data);
      Toast({
        message: "Empresa criada com sucesso",
        type: "success",
        toastId: "createCompany",
      });
      return;
    } catch (error: any) {
      for (let i = 0; i < error.response.data.errors.length; i++) {
        Toast({
          message: error.response.data.errors[i].message,
          type: "error",
          toastId: error.response.data.errors[i].message,
        });
      }
      return error.response.data.errors;
    }
  },
  async updateCompany(id: string, data: any) {
    return await api.put(`/companies/${id}`, data);
  },
  async deleteCompany(id: string) {
    return await api.delete(`/companies/${id}`);
  },
};
