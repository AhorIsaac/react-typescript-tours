import React, { FC, ReactElement } from "react";
import { ToursComponentProps } from "./app.types";
import Tour from "./Tour";

const Tours: FC<ToursComponentProps> = ({
  tours,
  removeTour,
}: ToursComponentProps): ReactElement => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
