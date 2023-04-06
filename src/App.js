import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./utils/routes";

import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
