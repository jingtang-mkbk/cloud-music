import React from 'react'
import styles from './index.module.scss'
import {
  SoundOutlined,
  SyncOutlined,
  SolutionOutlined
} from '@ant-design/icons'

export default function Ctrl() {
  return (
    <>
      <div className={styles.lasticon}>
        <SoundOutlined />
        <SyncOutlined />
        <SolutionOutlined />
      </div>
    </>
  )
}
