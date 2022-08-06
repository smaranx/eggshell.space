import React from "react";
import { PopupButton } from "react-calendly";

const Calendly1 = () => {
  return (
    <div className="App">
      <PopupButton
        url="https://calendly.com/smaran-ummadishetty/testing-calendly"
        rootElement={document.getElementById("test")}
        text="Click here to schedule!"
      />
    </div>
    
  );
};
export default Calendly1;