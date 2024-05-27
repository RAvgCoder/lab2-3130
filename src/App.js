import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import {useState} from "react";


function App() {
    const [count, setCount] = useState(0);


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home setCount={setCount}/>}/>
                    <Route path={"/home"} element={<Home  setCount={setCount}/>}/>
                    <Route path={"/contact"} element={<Contact count={count}/>}/>
                    <Route path={"/about"} element={<About count={count}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
