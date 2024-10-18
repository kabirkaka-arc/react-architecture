import * as React from "react";
import AppRoutes from "./config/router/AppRoutes";
import { store } from "./config/redux/store";
import { Provider } from "react-redux";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
