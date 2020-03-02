import React, {useState} from "react";

//import Header from "./Header";
import Footer from "./Footer";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

function App() {

  let backdrop;

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  console.log(sideDrawerOpen)

  //NAV BAR HANDLES
  //OPEN SIDE DRAWER
  function drawerToggleClickHandler () {
    setSideDrawerOpen(() => {
      return{sideDrawerOpen: true};
    });
  };
  //CLOSE SIDE DRAWER
  function backdropClickHandler (){
    setSideDrawerOpen(false);
  }

  //CONDITION FOR NAV BAR
  if (sideDrawerOpen) {
    backdrop=<Backdrop onClick={backdropClickHandler}/>
  } 

  return (
    <div style={{height: "100%"}}>

      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <main style={{marginTop: "64px"}}> 
      </main>
      <SideDrawer show={sideDrawerOpen} /> 
   
      {backdrop}

      <Footer/>

    </div>
  );
}
//   {sideDrawerOpen ? <SideDrawer />  : <h1>Hello</h1>}

export default App;
