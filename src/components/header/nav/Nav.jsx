import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiUser, FiLogIn, FiLogOut } from 'react-icons/fi'
import styles from './Nav.module.scss'
import { useAuth } from '../../../hooks/useAuth'
import { getAuth, signOut } from 'firebase/auth'
import app from '../../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../../store/user/user.slice'
import { removeUserId } from '../../../store/cart/cart.slice'

const Nav = () => {

  const auth = getAuth(app)
  const {isAuth} = useAuth()
  const dispatch = useDispatch()
  
  const {products} = useSelector((state) => state.cartSlice)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser())
        dispatch(removeUserId())
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.counter}>
            <Link to={'/cart'}>
              {' '}
              <FiShoppingCart />
            </Link>
            {products.length > 0 && <b>{products.length}</b>}
          </div>
        </li>
        <li>
          <div className={styles.counter}>
            <Link to={'/order'}>
              {' '}
              <FiUser title='주문' />
            </Link>
          </div>
        </li>
        <li>
          {isAuth ? 
            <FiLogOut className={styles.nav_sign_out} title='로그아웃' onClick={handleSignOut}/>
            :
            <Link to={'/login'}>
              <FiLogIn title='로그인' />
            </Link>
          }
        </li>
      </ul>
    </nav>
  )
}

export default Nav