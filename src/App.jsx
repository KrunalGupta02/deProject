import { useEffect, useState } from "react";
import "./App.css";
import RingLoader from "react-spinners/RingLoader";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="app">
      {loading ? (
        <div className="loader">
          <RingLoader
            className="loader"
            color={"#33FFE3"}
            loading={loading}
            size={200}
          />
        </div>
      ) : (
        <div>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>
          </AuthContextProvider>
        </div>
      )}
    </div>
  );
}

export default App;
