import React from 'react';

import { Categories, SortPopup } from '../../components'

function Menu() {
  return (
    <div className="content__top">
      <Categories
        items={[
          'Мясные',
          'Вегетарианская',
          'Гриль',
          'Острые',
          'Закрытые'
      ]} />
      <SortPopup items={[
        {name: 'популярности', type: 'popular'},
        {name: 'цене', type: 'price'},
        {name: 'алфавиту', type: 'alphabet'},     
      ]} />
    </div>
  );
}

export default Menu;
