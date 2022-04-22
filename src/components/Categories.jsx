import React, { useState } from 'react';

const Categories = ({items}) => {
	const [activeItem, setActiveItem] = useState(null)
	const handleActiveItem = (item) => {
		setActiveItem(item)
	}
  return (
    <ul>
      <li className={`${activeItem === null ? 'active' : ''}`}>Все</li>
      {items.map((name, index) => (
        <li
          key={`${name}_${index}`}
          onClick={() => handleActiveItem(index)}
          className={`${activeItem === index ? 'active' : ''}`}>
          {name}
        </li>
      ))}
    </ul>
  );
};

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
