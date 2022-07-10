import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "./components/contexts/auth";
import Home from "./components/home-component/home.component";
import Login from "./components/login/login-page.component";

const AppRoutes = () => {
  const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) return <div>Carregando</div>;

    if (!user) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;