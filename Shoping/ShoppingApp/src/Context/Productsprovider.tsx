import { ReactElement, createContext, useEffect, useState } from "react"

export type ProductType={
    sku:string,
    name:string,
    price:number
}
const initState:ProductType[]=[]


// const initstate:ProductType[]=[
    
//         {
//             "sku":"item000",
//             "name":"mfkd",
//             "price":1000
//         },
//         {
//             "sku":"item011",
//             "name":"mfkd",
//             "price":2000
//         },
//         {
//             "sku":"item012",
//             "name":"mfkd",
//             "price":3000
//         }
// ]
export type UseProductContextType={
    products:ProductType[]
}

const initContextState:UseProductContextType={products:[]}
const productsContext=createContext<UseProductContextType>
(initContextState)

type ChildrenType={
    children?:ReactElement|ReactElement[]
}

export const ProductsProvider=({children}:ChildrenType):
ReactElement => {
    const[products,setProducts]=useState<ProductType[]>
    (initState)


    useEffect(() => {
       const fetchProducts=async():Promise<ProductType[]>=>{
        const data =await fetch('http://localhost:3500/products').then(res=>{
            return res.json()
        }).catch(err=>{
            if(err instanceof Error)
            console.log(err.message)
        })
        return data
       };

       fetchProducts().then(products=>setProducts(products))
       
      
    }, [])
    return (
        <productsContext.Provider value={{products}}>
            {children}
            </productsContext.Provider>
    )
}

export default productsContext;


// import React from 'react'

//  export const Productsprovider = () => {
//   return (
//     <div>Productsprovider</div>
//   )
// }

// export default Productsprovider