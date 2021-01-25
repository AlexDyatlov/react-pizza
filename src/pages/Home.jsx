import React from 'react';

import { Menu, PizzaBlock } from '../components';

function Home({ items }) {
  return (
    <div className="container">
      <Menu />
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
