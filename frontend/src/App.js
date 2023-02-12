import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
  return (
    <div>
      {/* <Routes>
        <AuthProvider>
          <Header/>
          <PrivateRoute component={HomePage} path="/" exact/>
          <Route component={LoginPage} path="/login"/>
        </AuthProvider>
      </Routes> */}
      <AuthProvider>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/login" element={<LoginPage />} />          
        </Routes>
      </AuthProvider>
    </div>
       
  )
}

export default App;

{/* <Header/>
      <AuthProvider>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<HomePage/>} path="/" exact/>
        </Route>
        <Route element={<LoginPage/>} path="/login" />
      </Routes>
      </AuthProvider> */}
