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

import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Blockchain from "./pages/Blockchain";
import Flutter from "./pages/Flutter";
import UI from "./pages/UI";
import Python from "./pages/Python";
import Java from "./pages/Java";
import Cyber from "./pages/Cyber";
import Android from "./pages/Android";

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
              <Route path="/front" element={<Frontend />} />
              <Route path="/back" element={<Backend />} />
              <Route path="/block" element={<Blockchain />} />
              <Route path="/cyber" element={<Cyber />} />
              <Route path="/flutter" element={<Flutter />} />
              <Route path="/java" element={<Java />} />
              <Route path="/python" element={<Python />} />
              <Route path="/ui" element={<UI />} />
              <Route path="/andr" element={<Android />} />
            </Routes>
          </AuthContextProvider>
        </div>
      )}
    </div>
  );
}

export default App;
