import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Box from "./Box";
import "./index.css";
import Header from "./Header";
import Rat from "./Rat";
import Body from "./Body";
import Office from "./Office";
import Bike from "./Bike";
import Gameshooks from "./Gameshooks";
import Mile from "./Mile";
import Netflix from "./Netflix";
import Sales from"./Sales"
import Api from"./Api"  
import Emma from "./Emma";
import Kitchen from "./Kitchen";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header2 from "./assets/Header2";  
import Contact from "./Contact";
import Services from "./Services";




  


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Header/> */}
    {/* <Box/>  */} 
    
    {/* <Body/>
    <Rat/>
    <Office/> 
    //  <Bike/> */}
    {/*    */}
    {/* <Netflix/> */}
    {/* <Sales/> */}
    {/* <Api/> */}
    {/* <Emma/>d */}
    {/* <Kitchen/> */}
    <BrowserRouter>
    <Header2/>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/about" element={<About/>}/>
       <Route path= "/header2" element={<Header2/>}/>
       <Route path= "/Contact" element={<Contact/>}/>
       <Route path= "/Services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>


  </StrictMode>
)
  