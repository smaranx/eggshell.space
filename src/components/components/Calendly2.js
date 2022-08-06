import React from "react";
import { PopupButton } from "react-calendly";

const Calendly2 = () => {
  return (
    <div className="App">
      <PopupButton
        url="https://calendly.com/smaran-ummadishetty/testing-calendly-1"
        rootElement={document.getElementById("test")}
        text="Click here to schedule!"
      />
    </div>
    
  );
};
export default Calendly2;