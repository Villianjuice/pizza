import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, PizzaBlock, SortPopup } from '../components';
import { setCategory } from './../redux/actions/filter';

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector(({pizzas}) => pizzas.items)
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(index) => dispatch(setCategory(index))}
          items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
