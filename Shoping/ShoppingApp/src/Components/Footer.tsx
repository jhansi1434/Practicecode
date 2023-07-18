//import React from 'react'

import useCart from '../hooks/useCart'
  
type PropsType={
  veiwCart:boolean,
}

const Footer = ({veiwCart}:PropsType) => {
  const {totalItems,totalPrice}=useCart()

  const year:number=new Date().getFullYear()

  const pageContent=veiwCart
     ?<p>Shoping cart &copy;{year}</p>
    :(
  <><p>TotalItems:{totalItems}</p>
  <p>TotalPrice:{totalPrice}</p>
  <p>Shoping Cart&copy;{year}</p>
  </>
 )

 const content=(
  <footer>
    {pageContent}
  </footer>
 )
  return content
}

export default Footer