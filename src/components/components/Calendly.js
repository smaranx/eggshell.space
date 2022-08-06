import React from "react";
import { PopupButton } from "react-calendly";

const Calendly = () => {
  return (
    <div className="App">
      <PopupButton
        url="https://calendly.com/smaran-ummadishetty/testing-a-calendly-intake-form"
        rootElement={document.getElementById("test")}
        text="Click here to schedule!"
      />
    </div>
    
  );
};
export default Calendly;