import React, { createContext, useState } from "react";
import { api } from "../../services/api";

export const TagsContext = createContext({
  tags: [],
  setTags: () => {},
  addNewTag: () => {},
});

export const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState([]);

  const addNewTag = async (tagToAdd) => {
    api.post("/tag", {name: tagToAdd})
  };

  const value = {
    tags,
    setTags,
    addNewTag,
  };

  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
};
