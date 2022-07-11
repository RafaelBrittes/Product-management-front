import { useContext, useEffect } from "react";
import { api } from "../../services/api";
import Button from "../button/button.component";
import { AuthContext } from "../contexts/auth";
import { ProductsContext } from "../contexts/products";
import Products from "../products/products.component";

const Home = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const { products, setProducts, loading, setLoading } =
    useContext(ProductsContext);

  const handleLogout = () => {
    logoutUser();
  };

  useEffect(() =>  {
    api.get("/product").then((res) => { 
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  
  return (
    <>
      <h1>HOME</h1>
      <h1>{user.name}</h1>
      {loading ? (
        <div>Loading Products...</div>
      ) : products.length ? (
        products.map((item) => (
          <Products key={item.id} product={item}></Products>
        ))
      ) : (
        <div>No products found.</div>
      )}
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default Home;
