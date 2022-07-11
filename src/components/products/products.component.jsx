import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import AddTags from "../add-tags/add-tags.component";
import { ProductsContext } from "../contexts/products";
import Tags from "../tags/tags.component";
import { ButtonContainer, ProductsContainer } from "./products.styles";

const Products = ({ product }) => {
  const { removeProduct } = useContext(ProductsContext);
  const [tags, setTags] = useState([]);
  const [tagsToAdd, setTagsToAdd] = useState(null);
  const removeProductHandler = () => {
    removeProduct(product);
  };

  const showProductTagsHandler = () => {
    api.get(`/product/tags/`, { params: { id: product.id } }).then((res) => {
      setTags(res.data);
      if (res.data.length == 0) {
        return toast.error("No tags found!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setTagsToAdd(null);
    });
  };

  const showTagsHandler = () => {
    setTags(null);
    if (tagsToAdd != null) {
      return setTagsToAdd(null);
    }
    api.get(`/tag`).then((res) => {
      setTagsToAdd(res.data);
    });
  };

  return (
    <ProductsContainer>
      <h3>ID: {product.id}</h3>
      <h3>Name: {product.name}</h3>
      <ButtonContainer>
        <button onClick={removeProductHandler}>&#10005;</button>
        <button onClick={showProductTagsHandler}>Show Tags &#10095;</button>
        {tags &&
          tags.map((tag) => (
            <Tags key={tag.id} tag={tag} product={product}></Tags>
          ))}
        <button onClick={showTagsHandler}>Add Tags &#x2b;</button>
        {tagsToAdd &&
          tagsToAdd.map((tag) => (
            <AddTags key={tag.id} tag={tag} product={product}></AddTags>
          ))}
      </ButtonContainer>
    </ProductsContainer>
  );
};

export default Products;
