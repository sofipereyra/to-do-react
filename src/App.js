import {Route, Link, Routes, BrowserRouter, Navigate} from 'react-router-dom';

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import TasksPage from './pages/tasks/TasksPage'
import NotFoundPage from './pages/404/NotFoundPage'

function App() {

  let loggedIn = true;

  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/'
            element = {
              loggedIn ? 
              <Navigate replace to='/tasks'/>
              :
              <LoginPage />
            }
          />
          <Route exact path='/login' element={ <LoginPage/> } />
          <Route exact path = '/register' element={ <RegisterPage/> } />
          <Route exact path='/tasks'
            element = {
              loggedIn ? 
              <TasksPage/>
              :
              <Navigate replace to='/login'/>
            }
          />
          <Route element={ <NotFoundPage/>} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
