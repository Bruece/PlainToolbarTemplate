import React from "react";


function Footer(){
  
// Return today's date and time
var currentTime = new Date();
// returns the year (four digits)
var year = currentTime.getFullYear();

  return (
    <footer>
    <p>
      Copyright {year}
    </p>
    </footer>
  );
  }
export default Footer;