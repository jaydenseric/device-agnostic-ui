// @ts-check

import classNameProp from "class-name-prop";
import React from "react";

/**
 * React component for displaying simple HTML with styles, typically derived
 * from markdown. Supported HTML:
 *
 * - [`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1),
 *   [`<h2>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2),
 *   [`<h3>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3),
 *   [`<h4>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4),
 *   [`<h5>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h5),
 *   [`<h6>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6)
 * - [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
 * - [`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
 * - [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul),
 *   [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol),
 *   [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
 * - [`<code>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code),
 *   [`<pre>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
 *   with a
 *   [`<code>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
 *   child
 * - [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) with
 *   [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href)
 *   attribute
 * - [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table),
 *   [`<thead>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead),
 *   [`<tbody>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody),
 *   [`<tr>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr),
 *   [`<th>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th),
 *   [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
 * - [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
 */
const Html = React.forwardRef(
  (
    /**
     * @type {React.ComponentPropsWithoutRef<"div">
     *   & { [dataAttribute: `data-${string}`]: unknown }}
     */
    { className, ...props },

    /** @type {React.ForwardedRef<HTMLDivElement>} */
    ref
  ) =>
    React.createElement("div", {
      className: classNameProp("daui-Html", className),
      ...props,
      ref,
    })
);

Html.displayName = "Html";

export default Html;
