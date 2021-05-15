import React from "react";

function Toggle() {
  
  const [isOn,setIsOn]=React.useState(true)
  const colorSelector=isOn?"red":"green"
  return <button style={{background:colorSelector}} onClick={()=>setIsOn(!isOn)}>{isOn?"OFF":"ON"}</button>;
}

export default Toggle;
