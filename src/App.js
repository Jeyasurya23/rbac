import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  const ProtectedRoute = ({ children }) => {
    const userRole = localStorage.getItem('userRole');
    return userRole ? children : <Navigate to="/" replace />;
  };

  return (
    <Router basename="/rbac-admin">
      <div className="bg-dark text-white min-vh-100">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          className="mt-3"
          toastClassName="shadow-sm border-0"
          bodyClassName="p-3"
          style={{
            width: 'auto',
            maxWidth: '400px',
          }}
          toastStyle={{
            background: '#333',
            borderRadius: '8px',
            color: '#fff',
          }}
        />
        <Routes>
          <Route
            path="/"
            element={
                <Login />     
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="bg-dark text-white min-vh-100">
                  <Navbar />
                  <Dashboard />
                </div>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
