import React, { useState } from "react";
import { TourComponentProps } from "./app.types";

const Tour = ({
  id,
  name,
  info,
  image,
  price,
  removeTour,
}: TourComponentProps) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button onClick={() => removeTour(id)} type="button" className="delete-btn">
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
