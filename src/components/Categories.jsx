import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ items, onClickItem, activeCategory }) {
  return (
    <ul>
      <li
        onClick={() => onClickItem(null)}
        className={`${activeCategory === null ? 'active' : ''}`}>
        Все
      </li>
      {items.map((name, index) => (
        <li
          key={`${name}_${index}`}
          onClick={() => onClickItem(index)}
          className={`${activeCategory === index ? 'active' : ''}`}>
          {name}
        </li>
      ))}
    </ul>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func.isRequired,
  activeCategory: PropTypes.number,
};
Categories.defaultProps = {
  activeCategory: null,
};

export default Categories;
