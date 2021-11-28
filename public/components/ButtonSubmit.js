"use strict";

const PropTypes = require("prop-types");
const React = require("react");
const Button = require("./Button.js");
const IconTick = require("./IconTick.js");
const Loading = require("./Loading.js");

const ButtonSubmit = React.forwardRef(
  ({ loading, success, disabled, children, ...props }, ref) =>
    React.createElement(
      Button,
      {
        disabled: disabled || loading,
        ...props,
        ref,
      },
      React.createElement(
        "span",
        {
          className: "daui-ButtonSubmit__grid",
        },
        React.createElement("span", null, children),
        loading && React.createElement(Loading),
        !loading && success && React.createElement(IconTick, { size: "0.8em" })
      )
    )
);

if (typeof process === "object" && process.env.NODE_ENV !== "production") {
  ButtonSubmit.displayName = "ButtonSubmit";
  ButtonSubmit.propTypes = {
    loading: PropTypes.bool,
    success: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };
}

module.exports = ButtonSubmit;
