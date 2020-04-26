import React from 'react';
import Item from '../Item';

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