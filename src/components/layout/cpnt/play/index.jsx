import React from 'react'
// import { Divider } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import Btns from './cpnt/btns'
import SliderBar from './cpnt/sliderbar'
import Oper from './cpnt/oper'
import Ctrl from './cpnt/ctrl'

export default function Play() {


  return (
    <>
      <div className={styles.playbar}>
        <div className={styles.trigger}>
          <div className={styles.lock}>
            <LockOutlined />
          </div>
        </div>
        <div className={styles.play}>
          <div className="w" style={{ border: 'none' }}>
            <Btns />
            <SliderBar />
            <Oper />
            <Ctrl />
          </div>
        </div>
      </div>
    </>
  )
}
