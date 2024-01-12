import './App.css'
import Login from './component/login'
import Profile from './component/profile'
import UserContextProvider from './context/UserContextProvider'

export default function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

