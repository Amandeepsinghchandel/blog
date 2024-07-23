
// import './App.css'
// import  Counter from "./components/Counter";
// import  Navbar  from './components/Navbar';
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import BlogPost from "./components/BlogPost";

function SayUser() {
  const params = useParams();

  return (
    <>
      <div>My name is: {params.userId}</div>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          <Route path="/user/:userId" element={<SayUser />} />
          <Route path="/posts/:postID" element={<BlogPost/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;
