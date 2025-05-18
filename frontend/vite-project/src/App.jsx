import './App.css';
import EditPage from './Components/Edit/EditPage';
import Header from './Components/Header/Header';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Components/Product/Product'; 

function App() {
  const [isEdit, setEdit] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header setEdit={setEdit}/>} />
          <Route path="/edit" element={<EditPage setEdit={setEdit} />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;