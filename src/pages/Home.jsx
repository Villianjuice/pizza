import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlockLoad, Categories, PizzaBlock, SortItem } from '../components';
import { AddCart } from '../redux/action/cart';
import { setCategory, setSortBy } from '../redux/action/filters';
import { setFetchPizzas } from '../redux/action/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
  { name: 'цене', type: 'price', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();

  const { items, isLoad } = useSelector(({ pizzas }) => ({
    items: pizzas.items,
    isLoad: pizzas.isLoad,
  }));

  const { category, sortBy } = useSelector(({ filters }) => ({
    category: filters.category,
    sortBy: filters.sortBy,
  }));

  const countPizza = useSelector(({cart}) => cart.items)

  React.useEffect(() => {
    dispatch(setFetchPizzas(category, sortBy));
  }, [dispatch, category, sortBy]);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );
  const onSelectSort = React.useCallback(
    (sortBy) => {
      dispatch(setSortBy(sortBy));
    },
    [dispatch],
  );

  const onAddPizza = React.useCallback((pizza) => {
    dispatch(AddCart(pizza))
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <div className="categories">
          <Categories
            onClickItem={onSelectCategory}
            items={categoryNames}
            activeCategory={category}
          />
        </div>
        <SortItem onSelectSort={onSelectSort} items={sortItems} activeSortType={sortBy.type} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoad
          ? items.map((item) => <PizzaBlock countPizza={countPizza[item.id] && countPizza[item.id].length} onAddPizza={onAddPizza} key={item.id} {...item} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <BlockLoad key={index} />)}
      </div>
    </div>
  );
};

export default Home;
