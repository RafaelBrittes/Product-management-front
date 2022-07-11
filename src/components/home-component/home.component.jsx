import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { AuthContext } from "../contexts/auth";
import { ProductsContext } from "../contexts/products";
import NewProduct from "../new-product/new-product.component";
import Products from "../products/products.component";
import { HomeContainer } from "./home.styles";

const Home = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const { products, setProducts, loading, setLoading } =
    useContext(ProductsContext);
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    logoutUser();
  };

  useEffect(() => {
    api.get("/product").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <HomeContainer>
      <h1>{user.name}</h1>
      <Button onClick={handleLogout}>Logout</Button>
      {loading ? (
        <div>Loading Products...</div>
      ) : products.length ? (
        products.map((item) => (
          <Products key={item.id} product={item}></Products>
        ))
      ) : (
        <div>No products found.</div>
      )}
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add new Product
      </Button>
      {openModal && <NewProduct setOpenModal={setOpenModal} />}
    </HomeContainer>
  );
};

export default Home;
