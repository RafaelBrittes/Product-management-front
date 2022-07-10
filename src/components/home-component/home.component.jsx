import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import Button from "../button/button.component";
import { AuthContext } from "../contexts/auth";

const Home = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [ products, setProducts ] = useState([]);
  const handleLogout = () => {
    logoutUser();
  };

  useEffect(() => {
    api.get("/product").then((res) => {
      setProducts(res.data)
      console.log("products", res.data)
    });
  }, []);

  return (
    <>
      <h1>HOME</h1>

      <h1>{user.name}</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default Home;
