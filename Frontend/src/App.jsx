import { useContext, useState } from 'react'
import { Routes } from 'react-router-dom'
import { Route} from 'react-router-dom'
import AuthPage from './pages/auth'
import RouteGuard from './components/route-guard'
import { AuthContext } from './context/auth-context'
import InstructorDashboardPage from './pages/instructor'
import StudentViewCommonLayout from './components/student-view/Common-layout'
import StudentHomePage from './pages/student/home'

function App() {
  const {auth} = useContext(AuthContext)
  console.log('from app.jsx');
  console.log(auth);
  
  

  return (
    <>
      <Routes>
        <Route
         path='/auth' 
         element={
            <RouteGuard 
            element={<AuthPage/>}
            authenticated={auth?.authenticate}
            user={auth?.user}
            />
          } 
        />
        <Route
        path='/instructor'
        element={
            <RouteGuard
            element={<InstructorDashboardPage/>}
            authenticated={auth?.authenticate}
            user={auth?.user}
            />
        }
        />

        <Route
        path='/'
        element={
          <RouteGuard
          element={<StudentViewCommonLayout/>}
          authenticated={auth?.authenticate}
          user={auth?.user}
          />
        }
        >
          <Route path='' element={<StudentHomePage/>} />
          <Route path='home' element={<StudentHomePage/>} />
        </Route>


      </Routes>
    </>
  )
}

export default App
