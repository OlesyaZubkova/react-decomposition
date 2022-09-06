import React from "react";
import { nanoid } from "nanoid";

const SearchList = ({ links }) => {
  return (
    <div className="ui horizontal list">
      {links.map((link) => (
        <a href="/" className="item" key={nanoid()}>
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default SearchList;
