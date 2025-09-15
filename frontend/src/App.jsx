import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import Navbar from './components/Navbar';

import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protect quiz and result pages */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Navbar />
              <QuizPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/result/:resultId"
          element={
            <PrivateRoute>
              <Navbar />
              <ResultPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;