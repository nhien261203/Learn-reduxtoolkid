import './App.css'
import EditPage from './Components/Edit/EditPage';
import Header from './Components/Header/Header'
import { useState } from 'react';

function App() {
  const [isEdit, setEdit] = useState(false);

  return (
    <>
      <div className="App">
        {isEdit ? (<EditPage setEdit={setEdit}/>)
          :
          (<Header setEdit={setEdit} />)}


      </div>
    </>
  )
}

export default App
