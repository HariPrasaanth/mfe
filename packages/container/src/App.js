import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <hr />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
