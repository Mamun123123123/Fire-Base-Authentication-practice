
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Route,Routes } from "react-router";
import Register from './component/Register.jsx';
import Login from './component/Login.jsx';
createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>,
)
