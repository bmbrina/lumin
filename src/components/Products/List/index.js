import React, { Component } from 'react';
import Item from '../../Item';
import { fixedNumber } from '../../../helpers/utilities';

export default function List({products}) {  
  return (
    <>
      {products.map(item => (
        <Item 
          data={item}
          key={item.id}
        />
      ))}
    </>
  );
}