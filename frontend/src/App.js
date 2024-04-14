import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import SignIn from './components/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path='/signin' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
