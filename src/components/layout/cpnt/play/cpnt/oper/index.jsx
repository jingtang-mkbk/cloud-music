import React from 'react'
import styles from './index.module.scss'
import {
  BlockOutlined,
  RotateRightOutlined,
  FolderAddOutlined
} from '@ant-design/icons'
import { Divider } from 'antd'

export default function Oper() {
  return (
    <>
      <div className={styles.threeicon}>
        <BlockOutlined />
        <FolderAddOutlined />
        <RotateRightOutlined />
        <Divider type="vertical" style={{ color: 'white' }} />
      </div>
    </>
  )
}
