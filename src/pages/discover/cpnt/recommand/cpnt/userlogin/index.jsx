// @ts-nocheck
import React from 'react'
import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginpopAction } from '@/store/action/loginpop'

export default function UserLogin() {
  const dispatch = useDispatch()


  // 显示的登录框
  const showLoginpop = () => {
    dispatch(loginpopAction(true))
  }

  return (
    <>
      <div className={styles.login}>
        <p className={styles.txt}>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <NavLink onClick={showLoginpop} className={styles.link} to="#">用户登录</NavLink>
      </div>
    </>
  )
}
