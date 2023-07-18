import React from 'react';
import Nav from './Nav';
import useCart from '../hooks/useCart';




type propsType={
    veiwCart:boolean,
    setVeiwcart:React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({veiwCart,setVeiwcart}:propsType) => {
const {totalItems,totalPrice}=useCart()

    const content=(
        <header className='header'>
            <div className="header__tittle-bar">
                <h1>acem.co</h1>
                <div className="header__price-box">
                    <p>total items:{totalItems}</p>
                    <p>total price:{totalPrice}</p>
                </div>
            </div>
            <Nav veiwCart={veiwCart} setVeiwcart={setVeiwcart}/>

        </header>
    )
  return content
    
  
}

export default Header