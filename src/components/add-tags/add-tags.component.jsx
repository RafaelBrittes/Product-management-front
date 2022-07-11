import { useState } from "react";
import { api } from "../../services/api";
import { Tag } from "./add-tags.styles";

const AddTags = ({ tag, product }) => {
  const [added, setAdded] = useState(false);
  const addTagHandler = async () => {
    api.put("/product/tags", { addTag: tag.id, id: product.id });
    setAdded(true);
  };

  return (
    <>
      <Tag added={added}>
        <div>Tag ID: {tag.id}</div>
        <div>Tag name: {tag.name}</div>
        {(!added && <button onClick={addTagHandler}>Add {tag.name}</button>)}
      </Tag>
    </>
  );
};

export default AddTags;
