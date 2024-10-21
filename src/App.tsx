import * as React from "react";
import AppRoutes from "./config/router/AppRoutes";
import { store } from "./config/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./global.scss";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <AppRoutes />
    </Provider>
  );
};

export default App;
