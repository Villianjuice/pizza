import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './pages';
import {setPizzas } from './redux/action/pizzas'
import './scss/app.scss';

const App = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({data}) => {
      dispatch(setPizzas(data))
    })
  }, [])
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       this.props.setPizzas(data.pizzas)
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="wrapper">
//           <Header />
//           <div className="content">
//             <Routes>
//               <Route path="/" element={<Home items={this.props.items}/>} />
//               <Route path="/cart" element={<Cart />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default  App;
