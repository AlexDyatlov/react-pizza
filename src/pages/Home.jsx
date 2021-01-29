import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Menu, PizzaBlock, Preloader } from '../components';
import { setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  React.useEffect(() => {
    if (!items.length) {
      dispatch(fetchPizzas());
    }
  }, []); 

  return (
    <div className="container">
      <Menu onSelect={onSelectCategory} />
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded 
          ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />)
          : Array(10).fill(<Preloader />)}
      </div>
    </div>
  );
}

export default Home;
