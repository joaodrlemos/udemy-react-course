import React, { useState, useEffect } from "react";

const SingleColor = ({ type, rgb, weight, hex }) => {
  const rgbColor = rgb.join(",");
  const hexValue = `#${hex}`;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setCopied(false), 3000);
    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <article
      className={type != "shade" ? "color" : "color color-light"}
      style={{
        backgroundColor: `rgb(${rgbColor})`,
      }}
      onClick={() => {
        navigator.clipboard.writeText(hexValue);
        setCopied(true);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {copied && <p>COPIED TO CLIPBOARD</p>}
    </article>
  );
};

export default SingleColor;
