import React, { createContext, useState } from "react";
import { api } from "../../services/api";

export const TagsContext = createContext({
  tags: [],
  setTags: () => {},
});

export const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState([]);

  const value = {
    tags,
    setTags,
  };

  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
};
