import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";

import "react-toastify/dist/ReactToastify.css";

import PrivatePage from "./utils/PrivatePage";
import store from "./store";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#4168B0",
            colorLink: "#4168B0",
          },
        }}
      >
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
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
