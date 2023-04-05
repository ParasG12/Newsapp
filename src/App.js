
import './App.css';
import { useState } from 'react';

import React from 'react'
import Navbar from './components/Navbar';
import News   from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



// export default class App extends Component {
  const App = ()=>{
//  state ={
//   progress:0



//   }
let [progress,setprogress]=useState(0)
  const setProgress=(progress)=>{
    setprogress(progress)
  }
  const pagesize = 5;
  // apiKey =  "495fbf93e1814ba9beb9060b271f83fb"
  // render() {
   

   
    return (
      <>
      
       <Router>
        <Navbar/>
        <LoadingBar
         color='#f11946'
          progress={progress}
         height={3}
        
      />
        <Routes>
          <Route exact path="/" element={<News      setProgress={setProgress} key="general"pageSize={pagesize} country = "in" category="general"/>}/>
          <Route exact path="/entertainment" element={<News    setProgress={setProgress} key="entertainment" pageSize={pagesize} country = "in" category="entertainment"/>}/>
          <Route exact path="/sports" element={<News      setProgress={setProgress} key="sports"pageSize={pagesize} country = "in" category="sports"/>}/>
          <Route exact path="/general" element={<News    setProgress={setProgress} key="general"pageSize={pagesize} country = "in" category="general"/>}/>
          <Route exact path="/health" element={<News    setProgress={setProgress} key="health"pageSize={pagesize} country = "in" category="health"/>}/>
          <Route exact path="/science" element={<News     setProgress={setProgress} key="science" pageSize={pagesize} country = "in" category="science"/>}/>
          <Route exact path="/technology" element={<News     setProgress={setProgress} key="technology" pageSize={pagesize} country = "in" category="technology"/>}/>
          <Route exact path="/business" element={<News    setProgress={setProgress} key="business"pageSize={pagesize} country = "in" category="business"/>}/>
    
       
       </Routes>
       </Router>
     
       </>
        
      
    )
  // }
 
}
export default App

  
