import { useContext, useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { FormContainer, NewProductBackground } from "./new-tag.styles";
import { toast } from "react-toastify";
import { TagsContext } from "../contexts/tags";

const NewTag = ({ setOpenTagModal }) => {
  const [formValues, setFormValues] = useState("");
  const { tagName } = formValues;
  const { addNewTag } = useContext(TagsContext);

  const handleChange = (event) => {
    const { value } = event.target;

    setFormValues(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTag(formValues).then((res) => {
      toast.success("Tag Created", {
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
        <div className="tagName">
          <label htmlFor="tagName">Tag name</label>
          <input
            required
            placeholder="Tag name"
            type="text"
            name="tagName"
            value={tagName}
            onChange={handleChange}
          />
        </div>
        <Button type="submit">Create new Tag</Button>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={() => {
            setOpenTagModal(false);
          }}
          type="submit"
        >
          Cancel
        </Button>
      </FormContainer>
    </NewProductBackground>
  );
};

export default NewTag;
