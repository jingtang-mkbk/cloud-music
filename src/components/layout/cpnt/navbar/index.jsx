import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { SearchOutlined } from '@ant-design/icons'
import { Input, Menu } from 'antd';
import { loginpopAction } from '@/store/action/loginpop'
import { useDispatch } from 'react-redux';
import items from './config'

export default function NavBar() {

  // state
  const [current, setCurrent] = useState('/')

  // hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // 初始visible=false
  useEffect(() => {
    dispatch(loginpopAction(false))
  }, [dispatch])

  // 显示loginpop
  const showLoginpop = () => {
    dispatch(loginpopAction(true))
  }

  // navbar切换跳转
  const navbarClick = (e) => {
    navigate(e.key)
    setCurrent(e.key);
  }

  return (
    <>
      <div className={styles.top1}>
        <div className={styles.navBar}>
          <div style={{ display: 'flex' }}>
            <div className={styles.logo}></div>
            <Menu
              onClick={navbarClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
            />
          </div>
          <div className={styles.rightBox}>
            <Input style={{ width: '160px', height: '32px', borderRadius: '16px' }} placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
            <NavLink to='/login' className={styles.center}>创作者中心</NavLink>
          </div>
          <div onClick={showLoginpop} className={styles.loginbtn}>登录</div>
        </div>
      </div>
    </>
  )
}
