
// import './App.css';
// import {Route, Routes} from 'react-router-dom'
// import Homepage from './Pages/Homepage';
// import Chatpage from './Pages/Chatpage';
// import Login from './components/Authentication/Login';
// function App() {
//   return (
//     <>
//   <div className='App'>
//   <Routes>
// <Route path="/" element={Homepage}/>
// <Route path="/chats" element={Chatpage}/>
//   </Routes>

//   </div>
//     </>
//   );
// }

// export default App;

// App.js

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';
import Login from './components/Authentication/Login';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
