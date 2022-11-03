// // import Testimonials from './components/Testimonials.jsx';
// // import './App.css'
// // // import Testimonials2 from './components/Testimonials2.jsx';

// // // const App = () => {

// // //   return (

// // //     <div style={{display:'flex' , gap:"0px"}}>
// // //       <Testimonials image="https://images.pexels.com/photos/771742/p
// // exels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800"
// // //       name="John Doe"
// // //       content="Give everyone you work with --
// // //       inside and outside you emoji , keep conversations focused in channel
// s, and simplify all your communictaion into one place."
// // //       star={[0,1,2,3,4]}
// // //       />
// // //       <Testimonials2 image="https://img.freepik.com/free-photo/grunge
// // -paint-background_1409-1337.jpg?w=2000"
// // //       head="data"
// // //       content="our latest"
// // //       name="Kol cooper | Januray 2022"/>
// // //     </div>
// // //     )
// // // }

// // export default App

import "./App.css";
import Product from "./Pages/Product";
import Header from "./Pages/header";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";
import Services from "./Pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Container">
      <div className="Body">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/Product" element={<Product />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Login" element={<Login />} />
          </Routes>

          <Footer instagram="Instagram" />
        </BrowserRouter>
      </div>

      <div></div>
    </div>
  );
}

export default App;

// import './App.css'
// import { useState } from 'react';
// import { useEffect } from 'react';
// const Stopwatch  = () => {
//   const [ time , setTime] = useState(0);
//   const [running , setRunning] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (running){
//      interval = setInterval(() => {
//        setTime((prevTime) =>  prevTime + 10)
//      } , 20)

//     }
//     return () => {
//       clearInterval(interval)
//     }
//   } ,   [running])

//    return (
//     <div className='Stopwatch'>
//       <div className='number'>
//         <span>{("0" + Math.floor((time / 60000) %60 )).slice(-2)}:</span>
//         <span>{("0" + Math.floor((time / 1000) %60 )).slice(-2)}:</span>
//         <span>{("0" + ((time / 10) %100 )).slice(-2)}</span>
//       </div>
//       <div className="buttons">
//         <button onClick={() => setRunning(true)}>Start</button>
//         <button onClick={() => setRunning(false)}>Stop</button>
//         <button onClick={() => setTime(0)}>Reset</button>
//       </div>
//     </div>
//    )
//   }

// export default Stopwatch;
