import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SearchboxProvider } from "./context/searchbox_context";
import { PaginationProvider } from "./context/pagination_context";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchboxProvider>
      <PaginationProvider>
        <App />
      </PaginationProvider>
    </SearchboxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
