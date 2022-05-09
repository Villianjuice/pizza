import React, { useEffect, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import sortOrderIcon from '../assets/img/sort-asc-svgrepo-com.svg';
import classNames from 'classnames';

const SortPopup = React.memo(function SortPopup({
  items,
  activeSortType,
  onClickSortType,
  order,
  onClickOrder,
}) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();
  const labelActiveSortType = items.find((obj) => obj.type === activeSortType).name;
  const TooglePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsiteClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath()) ;
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (type) => {
    onClickSortType(type);
    setVisiblePopup(false);
  };

  const handleOrder = () => {
    let newOrder;

    if (order === 'asc') {
      newOrder = 'desc';
    } else {
      newOrder = 'asc';
    }
    onClickOrder(newOrder);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsiteClick);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={visiblePopup ? 'rotate' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={TooglePopup}>{labelActiveSortType}</span>
        <img src={sortOrderIcon} onClick={handleOrder} alt="sortOrderIcon" className={classNames('sort__order', {asc: order === 'asc'})} />
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items.map((obj, index) => (
              <li
                key={`${obj.type}_${index}`}
                className={activeSortType === obj.type ? 'active' : ''}
                onClick={() => onSelectItem(obj.type)}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeSortType: PropTypes.string.isRequired,
  onClickSortType: PropTypes.func.isRequired,
};

export default SortPopup;
