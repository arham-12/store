import { useSelector } from 'react-redux'
import Auth  from '../Pages/Login'
const Protected = (props) => {
  const {Component} =props

    const isLogin = useSelector((state)=>state.cart.isLogin)
    console.log(isLogin)
  return isLogin?<Component/>:<Auth/>
}

export default Protected
