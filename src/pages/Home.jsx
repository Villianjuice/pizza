import React from 'react';
import { useSelector } from 'react-redux';
import { Categories, PizzaBlock, SortItem } from '../components';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortIems  = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphaber' },
]

const Home = () => {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const onSelectCategory = React.useCallback((index) => {
    console.log(index);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <Categories 
            onClickItem={onSelectCategory} 
            items={categoryNames}             
          />
        </div>
        <SortItem
          onClickItem
          items={sortIems}
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
