import './App.css';
import React from 'react';
import { Routes } from '../config';
// import { Routes, Route } from 'react-router-dom';
// import { Home } from './components/Home';
// import { Service } from './components/Service';
// import { About } from './components/About';
// import { Register } from './components/Register';
// import { Login } from './components/Login';
// import { useState } from 'react';
// import { Dashboard } from './components/Dashboard';
// import { Tracking } from './components/Tracking';
// import { DashboardBody } from './components/DashboardBody';
// import { Account } from './components/Account';
// import { Add } from './components/Add';
// import { Update } from './components/Update';
// import { Confirm } from './components/Confirm';

function App() {
  return (
    <Routes />
  );
  // const storedUserName = JSON.parse(localStorage.getItem('userName'));

  // const [userName, setUserName] = useState(storedUserName.userName);

  // const changUserName = (newUserName) => {
  //   if(!newUserName) {
  //     // LOGOUT
  //     localStorage.setItem('userName', JSON.stringify({userName: ''}));
  //   }else {
  //     // LOGIN
  //     localStorage.setItem('userName', JSON.stringify({userName: newUserName}));
  //     setUserName(newUserName);
  //   }
  // };

  // return (
  //   <>
  //     <Routes>
  //       <Route path='/' element={<Home />}/>
  //       <Route path='/service' element={<Service />}/>
  //       <Route path='/about' element={<About />}/>
  //       <Route path='/register' element={<Register />}/>
  //       <Route path='/login' element={<Login fun2={changUserName}/>}/>
  //       <Route path='/dashboard' element={<Dashboard func={changUserName} name={userName}/>} >
  //         <Route path='/dashboard' element={<DashboardBody name={userName}/>}/>
  //         <Route path='tracking' element={<Tracking name={userName}/>}/>
  //         <Route path='account' element={<Account name={userName}/>}/>
  //         <Route path='add' element={<Add />}/>
  //         <Route path='update' element={<Update />}/>
  //         <Route path='confirm' element={<Confirm />}/>
  //       </Route>
  //     </Routes>
  //   </>
  // );
}

export default App;
