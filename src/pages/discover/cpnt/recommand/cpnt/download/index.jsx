// @ts-nocheck
import React from 'react'
import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'

export default function Download() {
  return (
    <>
      <div className={styles.download}>
        <NavLink className={styles.downloadBtn} to="/download"></NavLink>
        <p className={styles.txt}>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </>
  )
}
