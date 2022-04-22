import React, { useState } from 'react';

const Categories = ({items}) => {
	const [activeItem, setActiveItem] = useState(null)
	const onSelectItem = (item) => {
		setActiveItem(item)
	}
	console.log(items.length);
  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
        {items && items.map((name, index) => 
					<li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${name}_${index}`}>{name}</li>
				)}
      </ul>
    </div>
  );
};

// class Categories extends React.Component{
// 	state = {
// 		activeItem: null
// 	}
// 	onSelectItem = item => {
// 		this.setState({activeItem:item})
// 	}
// 	render() {
// 		return(
// 			<div className="categories">
// 				<ul>
// 					<li>Все</li>
// 					{this.props.items.map((name, index) => 
// 						<li 
// 						className={this.state.activeItem === index ? 'active' : ''} 
// 						onClick={() => this.onSelectItem(index)}
// 						>{name}</li>
// 					)}
// 				</ul>
// 			</div>
// 		)
// 	}
// }

export default Categories;
