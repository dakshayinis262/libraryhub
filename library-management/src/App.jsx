import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Books from "./pages/Books";
import IssueBook from "./pages/IssueBook";
import LibraryHistory from "./pages/LibraryHistory";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/issue-book" element={<IssueBook />} />
        <Route path="/history" element={<LibraryHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;