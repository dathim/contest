import React from 'react';

export interface ILabel {
  children: React.ReactNode;
}

export const Label = ({ children }: ILabel) => {
  return <p>{children}</p>;
};
