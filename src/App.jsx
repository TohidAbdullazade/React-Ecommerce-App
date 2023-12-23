import "./style.scss";
import { Space } from "antd";
import React from "react";
import Header from "./layout/interface/components/Header";
import SideMenu from "./layout/interface/components/SideMenu";
import PagesContent from "./layout/interface/components/PagesContent";
import Footer from "./layout/interface/components/Footer";




const App = () => {
  return (
    <>
     
    <div className="full-container flex flex-col overflow-x-hidden" style={{ width: "100vw", height: "100vh" }}>
     <Header />
     <Space className="flex flex-1 justify-start items-start">
       <SideMenu></SideMenu>
       <PagesContent></PagesContent>
     </Space>
     <Footer />
     
   </div>
    
    </>
  );
};

export default App;
