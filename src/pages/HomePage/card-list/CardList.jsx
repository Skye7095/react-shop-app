import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './CardList.module.scss'
import { fetchProducts } from '../../../store/products/products.slice'
import CardItem from './card-item/CardItem'
import CardSkeleton from '../card-skeleton/CardSkeleton'

const CardList = () => {

  const dispatch = useDispatch()
  const {products, isLoading} = useSelector(state => state.productsSlice)
  const category = useSelector(state => state.categoriesSlice)

  useEffect(() => {
    dispatch(fetchProducts(category?.toLowerCase()))
  }, [category])

  if(isLoading) return <CardSkeleton />

  return (
    <ul className={styles.card_list}>
      {products.map(product => <CardItem key={product.id} item={product}/>)}
    </ul>
  )
}

export default CardList