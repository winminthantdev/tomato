import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Routers } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <Routers>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </Routers>
);
