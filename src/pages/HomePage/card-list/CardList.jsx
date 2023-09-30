import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './CardList.module.scss'
import { fetchProducts } from '../../../store/products/products.slice'

const CardList = () => {

  const dispatch = useDispatch()
  const {products} = useSelector(state => state.productsSlice)

  useEffect(() => {
    dispatch(fetchProducts(styles))
  }, [])

  return (
    <ul className={styles.card_list}>
      {products.map(product => <CardItem key={product.id} item={product}/>)}
    </ul>
  )
}

export default CardList