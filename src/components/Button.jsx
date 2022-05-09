import classNames from 'classnames'
import React from 'react'

// class Button extends React.Component{
//     render() {
//         return (
//             <button className={classNames('button', {'button--outline' : this.props.outline})}>{this.props.children}</button>
//         )
//     }
// }

const Button = ({outline, children, className, addNewPizza}) => {
    return (
        <button onClick={addNewPizza} className={classNames('button', className , {'button--outline' : outline})}>{children}</button>
    )
}

export default Button