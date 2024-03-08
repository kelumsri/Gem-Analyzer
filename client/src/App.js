import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./page/Landingpage";
import ImageUploader from "./page/ImageUploader";
import Result from "./page/Result";
import Instructions from "./page/Instructions";

function App() {
    return (
        <div class="">
            <Router>
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/imageuploader" element={<ImageUploader />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/Instructions" element={<Instructions/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
