import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ConditionForm from './components/condition-form/ConditionForm';
import Output from './components/output/Output';

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
        {/* <Header/> */}
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/condition" element={<ConditionForm />} />
            <Route path="/information" element={<HomePage />} />
            <Route path="/output" element={<Output />} />
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
