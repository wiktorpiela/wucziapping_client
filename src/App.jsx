import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ClosedEndedQuestions from "./Components/ClosedEndedQuestions";
import OpenEndedQuestions from "./Components/OpenEndedQuestions";
import DragDropQuestions from "./Components/DragDropQuestions";
import Exam from "./Components/Exam";
import Login from "./Components/Login";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/closed-ended-questions" element={<ClosedEndedQuestions />} />
          <Route path="/open-ended-questions" element={<OpenEndedQuestions />} />
          <Route path="/drag-drop-questions" element={<DragDropQuestions />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
