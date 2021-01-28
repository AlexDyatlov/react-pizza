import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Menu, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <Menu onSelect={onSelectCategory} />
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
