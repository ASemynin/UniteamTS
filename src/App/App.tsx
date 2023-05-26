import './App.css';
import { Route, Routes } from 'react-router-dom';

import Authorization from '../Entrance/Auth';
import Registration from '../Entrance/Reg';
import ForgotPsw from '../Entrance/ForgotPsw';
import Forms from '../Forms/Forms';
import Form from '../Forms/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/reg' element={<Registration/>}></Route>
        <Route path='/' element={<Authorization/>}></Route>
        <Route path='/pswF' element={<ForgotPsw/>}></Route>
        <Route path='/Forms' element={<Forms/>}></Route>
        <Route path='/Form/:id' element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
