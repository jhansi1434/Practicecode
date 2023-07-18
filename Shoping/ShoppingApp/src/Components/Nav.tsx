
import React from 'react'
type propsType={
    veiwCart:boolean,
    setVeiwcart:React.Dispatch<React.SetStateAction<boolean>>
}
const Nav = ({veiwCart,setVeiwcart}:propsType) => {
   const button=veiwCart
        ?<button onClick={()=>setVeiwcart(false)}>View Products</button>
        :<button onClick={()=>setVeiwcart(true)}>View Cart</button>


        const content=(
            <nav className='="nav'>
                {button}
            </nav>
        )
  return content
    
  
}

export default Nav