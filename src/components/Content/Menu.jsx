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
      <SortPopup items={['популярности', 'цене', 'алфавиту']} />
    </div>
  );
}

export default Menu;
