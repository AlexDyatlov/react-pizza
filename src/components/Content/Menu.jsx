import React from 'react';

import { Categories, SortPopup } from '../../components'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [ 
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'},   
];

function Menu({ onSelect }) {
  return (
    <div className="content__top">
      <Categories
        onClickItem={onSelect}
        items={categoryNames} />
      <SortPopup items={sortItems} />
    </div>
  );
}

export default Menu;
