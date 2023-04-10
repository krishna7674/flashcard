import { CreateFlashCard, DisplayCards, Navbar, ViewCard } from "./components";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-pink-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<CreateFlashCard />} />
          <Route path="/mycards" element={<DisplayCards />} />
          <Route path="/card/details/:id" element={<ViewCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
