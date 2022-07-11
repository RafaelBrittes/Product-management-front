import { useState } from "react";
import { api } from "../../services/api";
import { Tag, TagsContainer } from "./tags.styles";

const Tags = ({ tag, product }) => {
  const [deleted, setDeleted] = useState(false);
  const removeTagHandler = async () => {
    api.put("/product/tags", { deleteTag: tag.id, id: product.id });
    setDeleted(true);
  };

  return (
    <TagsContainer>
      <Tag deleted={deleted}>
        <div>Tag ID: {tag.id}</div>
        <div>Tag name: {tag.name}</div>
        {(!deleted && <button onClick={removeTagHandler}>Remove Tag &#10005;</button>)}
      </Tag>
    </TagsContainer>
  );
};

export default Tags;
