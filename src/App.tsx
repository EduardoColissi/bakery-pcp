import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store";
import Router from "./Router";

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
        <Router />
        <ToastContainer stacked transition={Zoom} limit={5} />
      </ConfigProvider>
    </Provider>
  );
};

export default App;
