export type TourProps = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

export type ToursProps = Array<TourProps>;

export type TourComponentProps = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  removeTour: (id: string) => void;
};

export type ToursComponentProps = {
  tours: TourProps[];
  removeTour: (id: string) => void;
};
