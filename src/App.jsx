import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Service from './components/frontend/Service';
import "./assets/css/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import ContactUs from './components/frontend/ContactUs';
import Login from './components/backend/Login';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/common/RequireAuth';
import { default as ShowServices } from './components/backend/services/show';
import { default as CreateServices } from './components/backend/services/Create';
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />
          <Route path="/admin/services" element={
            <RequireAuth>
              <ShowServices />
            </RequireAuth>
          } />

          <Route path="/admin/services/create" element={
            <RequireAuth>
              <CreateServices />
            </RequireAuth>
          } />

        </Routes>
      </BrowserRouter>
      <ToastContainer />

    </>
  )
}

export default App
