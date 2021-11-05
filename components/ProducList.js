import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Intro.module.scss"
import { getAllItems } from "../utils/storyblok"

const ProductList = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [items, setItems] = useState([]);
  getAllItems('product').then(
    function (result) {
      setItems(result.data.stories);
    });

  return (

    <ul className="">
      {/* {
      items.map((item) => (
        <li key={item.content._uid}>{item.content._uid}</li>
      )
      )} */}




      {items.map((item) => {
        const lang = item.lang === "default" ? "/en" : `/${item.lang}`;
        return (
          <li
            key={item.slug}
            className=""
          >
            <div className="">
              <span className="">
                {`
                    ${new Date(item.created_at).getDay()}.
                    ${new Date(item.created_at).getMonth()}.
                    ${new Date(item.created_at).getFullYear()}`}
              </span>
            </div>
            <div className="">
              <a
                className=""
                href={`${lang}/product/${item.slug}`}
              >
                {item.content.title}
              </a>
              <p className="">{render(item.content.summary)}</p>
            </div>
            <div className="">
              <a
                className=""
                href={`${lang}/product/${item.slug}`}
              >
                Read more 
              </a>
            </div>
          </li>
        );
      })}
    </ul>

  );
};

export default ProductList;
