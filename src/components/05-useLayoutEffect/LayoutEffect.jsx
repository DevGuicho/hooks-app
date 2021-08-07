import React, { useLayoutEffect, useRef } from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "./layout.css";

const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const pTag = useRef();
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect());
  }, [quote]);
  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag}>{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente Frase
      </button>
    </div>
  );
};

export default LayoutEffect;
