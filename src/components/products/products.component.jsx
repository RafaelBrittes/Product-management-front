import { useContext, useState } from "react";
import { api } from "../../services/api";
import { ProductsContext } from "../contexts/products";

const Products = ({ product }) => {
  const { removeProduct, showProductTags } = useContext(ProductsContext);
  const [tags, setTags] = useState([]);
  const removeProductHandler = () => {
    removeProduct(product);
  };

  const showProductTagsHandler = () => {
    api.get(`/product/tags/`, { params: { id: product.id } }).then((res) => {
      setTags(res.data);
    });
  };

  return (
    <div>
      <h3>ID: {product.id}</h3>
      <h3>Name: {product.name}</h3>
      <button onClick={removeProductHandler}>&#10005;</button>
      <button onClick={showProductTagsHandler}>Show Tags &#10095;</button>
      {tags &&
        tags.map((tag) => (
          <div key={tag.id}>
            <div>Tag ID: {tag.id}</div>
            <div>Tag name: {tag.name}</div>
          </div>
        ))}
    </div>
  );
};

export default Products;
