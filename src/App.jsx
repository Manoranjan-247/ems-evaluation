
import './App.css'
import LoginPage from "./components/login/LoginPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { LayoutProvider } from './context/LayoutContext'
import EmployeeList from './components/employee/EmployeeList'
import ProtectedRoute from './routes/ProtectedRoute'
import Layout from './components/commonComponents/Layout'
import { Provider } from 'react-redux'
import store from './app/store'
import AddEditEmployee from './components/employee/AddEditEmployee'
import { lazy, Suspense } from 'react'
import Error from './components/commonComponents/Error'
import Home from './pages/Home'
import LoadingComponent from './components/commonComponents/LoadingComponent'
const EmployeeDetails = lazy(()=>import('./components/employee/EmployeeDetails'))
function App() {


  return (
    <>
      <Provider store={store}>
        <LayoutProvider>
          <AuthProvider>
            <BrowserRouter >
              <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>} >
                  <Route path='/' element={<Home />} />
                  <Route path='employees' element={<EmployeeList />} />
                  <Route path='employees/new' element={<AddEditEmployee />} />
                  <Route path='employee-edit/:id' element={<AddEditEmployee />} />
                  <Route path="/employee-details/:id"
                    element={<Suspense fallback={<LoadingComponent />} >
                      <EmployeeDetails />
                    </Suspense>} />
                </Route>
                <Route path='*' element={<Error />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </LayoutProvider>
      </Provider>
    </>
  )
}

export default App
