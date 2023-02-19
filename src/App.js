import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import { appRouter } from "./utils/routes";

import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
