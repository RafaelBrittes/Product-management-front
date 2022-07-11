import { useContext, useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductsContext } from "../contexts/products";
import { FormContainer, NewProductBackground } from "./new-product.styles";
import { toast } from "react-toastify";

const NewProduct = ({ setOpenModal }) => {
  const [formValues, setFormValues] = useState("");
  const { productName } = formValues;
  const { addNewProduct } = useContext(ProductsContext);

  const handleChange = (event) => {
    const { value } = event.target;

    setFormValues(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewProduct(formValues).then((res) => {
      toast.sucess("Product Created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <NewProductBackground>
      <FormContainer onSubmit={handleSubmit}>
        <div className="productName">
          <label htmlFor="productName">Product name</label>
          <input
            placeholder="Name"
            type="text"
            name="productName"
            value={productName}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Create new Product</Button>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={() => {
            setOpenModal(false);
          }}
          type="submit"
        >
          Cancel
        </Button>
      </FormContainer>
    </NewProductBackground>
  );
};

export default NewProduct;
