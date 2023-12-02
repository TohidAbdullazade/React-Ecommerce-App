import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { GetAllProducts } from "../../../services/Products";

import Header from "../components/Header";

const Home = () => {
  const [card, setCard] = useState([]);
  const [input, setInput] = useState("");

  const getProduct = () => {
    GetAllProducts().then((res) => {
      setCard(res);
    });
  };
  useEffect(() => {
    getProduct();
  });

  return (
    <>
      <Header input={input} setInput={setInput} />
      <div className="grid grid-cols-4 gap-2.5 px-10 my-10">
        {card
          .filter((cards) => {
            if (input.toLowerCase() === "") {
              return cards;
            } else if (
              cards.title.toLowerCase().startsWith(input.toLowerCase())
            ) {
              return cards;
            }
          })
          .map((item) => {
            return <Product key={item.id} card={item}></Product>;
          })}
      </div>
    </>
  );
};

export default Home;
