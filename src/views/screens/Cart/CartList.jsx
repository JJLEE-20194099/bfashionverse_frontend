import { observer } from 'mobx-react'
import React from 'react'
import { useStore } from '../../../utils/context'
import CartComponents from './CartComponents'
import { Text } from 'react-native'
import { Padding, Purplerose2 } from '../../../constants'
const CartList = observer(()=>{
    const {cartStore: {order}} = useStore()
    if(order.length==0){
        return <Text style={{fontFamily: 'Quicksand_700Bold', fontSize: 20, padding: Padding, color: Purplerose2}}>Ban chua co san pham nao trong gio hang</Text>
    }
    return <>
        {
            order.map(i=>(
                <CartComponents name={i.name} price={i.price} id={i.id} key={i.id} isSelect={i.isSelect} quantity={i.quantity}/>
            )) 
        }
    </>
})
export default CartList