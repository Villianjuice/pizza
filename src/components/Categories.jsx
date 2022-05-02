import React, { useState } from 'react';

const Categories = React.memo(function Categories  ({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const selectItem = (index) => {
    setActiveItem(index);
    onClickItem(index)
  };

  return (
    <ul>
      <li onClick={() => selectItem(null)} className={`${activeItem === null ? 'active' : ''}`}>
        Все
      </li>
      {items.map((name, index) => (
        <li
          key={`${name}_${index}`}
          onClick={() => selectItem(index)}
          className={`${activeItem === index ? 'active' : ''}`}>
          {name}
        </li>
      ))}
    </ul>
  );
})



// class Categories extends React.Component {
//   state = {
//     activeItem: null,
//   };
//   handleActiveItem(item) {
//     this.setState({ activeItem: item });
//   }

//   render() {
//     const { items } = this.props;
//     return (
//   <ul>
//     <li className={`${this.state.activeItem === null ? 'active' : ''}`}>Все</li>
//     {items.map((name, index) => (
//       <li
//         key={`${name}_${index}`}
//         onClick={() => this.handleActiveItem(index)}
//         className={`${this.state.activeItem === index ? 'active' : ''}`}>
//         {name}
//       </li>
//     ))}
//   </ul>
//     );
//   }
// }

export default Categories;
