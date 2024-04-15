import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import PrivatePage from "./utils/PrivatePage";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import CompaniesList from "./components/pages/Companies/List";
import CreateCompany from "./components/pages/Companies/Create";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivatePage>
              <Dashboard />
            </PrivatePage>
          }
        />
        <Route
          path="/companies"
          element={
            <PrivatePage>
              <CompaniesList />
            </PrivatePage>
          }
        />
        <Route
          path="/companies/create"
          element={
            <PrivatePage>
              <CreateCompany />
            </PrivatePage>
          }
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default Router;
