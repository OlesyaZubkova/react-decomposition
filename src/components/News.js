import React from "react";
import { nanoid } from "nanoid";

const News = ({ listTitle, listNews }) => {
  return (
    <>
      <div>
        <div className="ui horizontal list">
          {listTitle.map((link) => (
            // eslint-disable-next-line
            <a href="#" className="item" key={nanoid()}>
              {link}
            </a>
          ))}
          {new Date(Date.now()).toLocaleString()}
        </div>

        <div className="ui vertikal list">
          {listNews.map((link) => (
            // eslint-disable-next-line
            <a href="#" className="item" key={nanoid()}>
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
