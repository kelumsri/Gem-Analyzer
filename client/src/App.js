import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./page/Landingpage";
import ImageUploader from "./page/ImageUploader";

function App() {
    return (
        <div class="">
            <Router>
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/imageuploader" element={<ImageUploader />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
