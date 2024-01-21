import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {Main, Login, Register} from './componets'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>

    </>


  );
}

export default App;
