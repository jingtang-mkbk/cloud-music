// @ts-nocheck
import React, { useState, useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import styles from './index.module.scss'
import { Menu } from 'antd'

const urlArr = [
  { label: '推荐', key: '/discover/recommand' },
  { label: '排行榜', key: '/discover/toplist' },
  { label: '歌单', key: '/discover/playlist' },
  { label: '主播电台', key: '/discover/djradio' },
  { label: '歌手', key: '/discover/artist' },
  { label: '新碟上架', key: '/discover/album' },
]

export default function Discover() {

  console.log("discover")

  // state
  const [current, setCurrent] = useState('/')
  const navigate = useNavigate()

  // navbar切换跳转
  const navbarClick = (e) => {
    navigate(e.key)
    setCurrent(e.key);
  }

  useEffect(() => {

    setCurrent(window.location.pathname)
  }, [window.location.pathname])

  return (
    <>
      {/* disocver导航栏 */}
      <div className={styles.top}>
        <div className={styles.w}>
          <Menu
            onClick={navbarClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={urlArr}
          />
        </div>
      </div>
      <Outlet />
      <div className="bottom"></div>
    </>
  )
}
