import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, PizzaBlock, SortPopup } from '../components';
import { setCategory } from './../redux/actions/filter';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const sortBy = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
] 

const Home = () => {
  const dispatch = useDispatch();

  const onSelectItem = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [])

  const items = useSelector(({ pizzas }) => pizzas.items);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectItem}
          items={categoryNames}
        />
        <SortPopup
          items={sortBy}
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
