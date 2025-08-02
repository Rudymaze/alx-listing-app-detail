import * as React from "react";

export interface CardProps {
  title?: string;

  children?: React.ReactNode;

  className?: string;

  [key: string]: any;
}

export interface ButtonProps {
  label?: string;

  type?: "button" | "submit" | "reset";

  disabled?: boolean;

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  className?: string;

  [key: string]: any;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  description: React.ReactNode;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}
