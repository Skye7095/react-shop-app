import React, { useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import CartEmpty from '../../../components/cart-empty/CartEmpty'
import styles from './OrdersList.module.scss'
import OrderItem from './order-item/OrderItem'
import { fetchOrder } from '../../../store/order/order.slice'

const OrdersList = () => {

  const {id} = useAuth()
  const {order} = useSelector(state => state.orderSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrder(id))
  }, [id])

  if(!order.length) {
    return <CartEmpty title='주문 내역' />
  }

  return (
    <div className={styles.orders}>
      {order.map(item => (
        <div key={item.id}>
          <div className={styles.order_header}>
            <h3>주문 번호_{item.id}</h3>
            <p>합계: $ {item.totalPrice.toFixed(2)}</p>
          </div>

          <ul className={styles.orders_list}>
            {item.products.map(order => (
              <OrderItem key={order.id} order={order} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default OrdersList