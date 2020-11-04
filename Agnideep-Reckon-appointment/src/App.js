import React from "react";
import "./App.css";
import Appointment from "./components/appointment/appointment";
import Tabs from "./components/tabs/tabs";

function App() {
  return (
    <div className="App">
      <Appointment />
        <button
            type="button"
            class="btn btn-warning btn-sm px-3 btn-block-xs-only mt-3 d-sm-none d-block col-sm-4 col-12"
          >
            <b>Book Appointment</b>
          </button>
      <Tabs />
    </div>
  );
}

export default App;
