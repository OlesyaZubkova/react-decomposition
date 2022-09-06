import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

// курс валют

const Currency = ({ currency }) => {
  // console.log("currency", currency);
  return (
    <div className="ui horizontal list">
      {currency.map((item) => (
        <p className="item" key={nanoid()}>
          <span>
            {item.currencyOrName} {item.rate}
          </span>{" "}
          {item.growth}
        </p>
      ))}
    </div>
  );
};

Currency.propTypes = {
  currency: PropTypes.array.isRequired,
};

export default Currency;
