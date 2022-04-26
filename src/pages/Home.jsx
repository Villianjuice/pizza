import React from 'react';
import { Categories, PizzaBlock, SortItem } from '../components';


const Home = ({items}) => {
  return (
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <Categories
            onClickItem
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          />
        </div>
        <SortItem onClickItem items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map(item => 
          <PizzaBlock key={item.id} {...item}/>
        )}
      </div>
    </div>
  );
};

export default Home;
