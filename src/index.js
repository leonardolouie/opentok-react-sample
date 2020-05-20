import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import config from "./config.js";

ReactDOM.render(
  <React.StrictMode>
    <App
      apiKey={config.API_KEY}
      sessionId={config.SESSION_ID}
      token={config.TOKEN}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
