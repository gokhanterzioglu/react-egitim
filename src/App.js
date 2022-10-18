import 'antd/dist/antd.css'
import SideBar from "./SideBar";
import MyHeader from "./MyHeader";
import { Layout } from "antd";
import MyContent from "./MyContent";
import React from "react";
import MyFooter from './MyFooter';

function App() {
  return (
    <>
        <Layout style={{minHeight:'936px'}}>
          <SideBar />
          <Layout className="site-layout">
            <MyHeader />
            <MyContent />
            <MyFooter/>
          </Layout>
        </Layout>
    </>
  );
}

export default App;
