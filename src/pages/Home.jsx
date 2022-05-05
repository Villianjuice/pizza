import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BlockLoaded, Categories, PizzaBlock, SortPopup } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from './../redux/actions/filter';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  { name: 'популярности', type: 'rating' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' },
];

const Home = () => {
  const dispatch = useDispatch();

  const { items, isLoaded } = useSelector(({ pizzas }) => ({
    items: pizzas.items,
    isLoaded: pizzas.isLoaded,
  }));
  const { category, sortBy } = useSelector(({ filters }) => ({
    category: filters.category,
    sortBy: filters.sortBy,
  }));

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [dispatch, category, sortBy]);

  const onSelectItem = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );
  const onClickSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [dispatch])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectItem}
          items={categoryNames}
          activeCategory={category}
        />
        <SortPopup items={sortItems} activeSortType={sortBy} onClickSortType={onClickSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => <PizzaBlock key={item.id} {...item} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <BlockLoaded key={index} />)}
      </div>
    </div>
  );
};

export default Home;
