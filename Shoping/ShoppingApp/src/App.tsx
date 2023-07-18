import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Cart from "./Components/Cart"
import ProductList from "./Components/ProductList"
import {useState} from 'react';

function App() {
  
const [veiwCart,setVeiwCart]=useState<boolean>(false)

const pageContent=veiwCart?<Cart/>:<ProductList/>

const content=(
  <>
  <Header veiwCart={veiwCart} setVeiwcart={setVeiwCart}/>
  {pageContent}
  <Footer veiwCart={veiwCart}/>
  </>
)
  return content
}



export default App
