import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./page/Landingpage";

function App() {
    return (
        <div class="">
           <Router>
            <Routes>
                <Route path="/" element={<Landingpage/>}/>
            </Routes>
           </Router>
        </div>
    );
}

export default App;
