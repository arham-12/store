import React, { useContext } from 'react'
import ProductSection from '../Components/Shop/ProductSection'
import CartContext from '../Context/CartContext'
import CartSection from '../Components/Cart/CartSection'


const Products = () => {


  const {ShowCart,Product} = useContext(CartContext)
  return (
<div className='pt-20 flex flex-col items-center  justify-center'>
  
<ProductSection Products={Product} ShowSearch={true} />

{/* Cart Section */}
<CartSection Show={ShowCart} />
</div>
  )
}

export default Products
