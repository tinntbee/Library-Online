import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TabDemo from "./Components/Tab/TabDemo";
import BookStore from "./Feature/BookStore";
import SideBar from "./Components/SideBar";

function App() {
  // const [tabIndex, setTabIndex] = useState(1);
  // const components = {
  //   tab1: React.lazy(() => import("./Components/Tab/TabDemo")),
  // };
  return (
    // <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    //   <TabList>
    //     <Tab>Title 1</Tab>
    //     <Tab>Title 2</Tab>
    //   </TabList>
    //   <React.Suspense fallback={<h1>Loading...</h1>}>
    //     <TabPanel><components.tab1/></TabPanel>
    //     <TabPanel> Hello 2 </TabPanel>
    //   </React.Suspense>
    // </Tabs>
    <div className="App">
      <SideBar />
      <BookStore />
    </div>
  );
}

export default App;
