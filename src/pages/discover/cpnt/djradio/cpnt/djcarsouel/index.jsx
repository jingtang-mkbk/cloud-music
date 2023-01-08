import React, { useRef } from 'react'
import styles from './index.module.scss'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import icons from './config'

export default function DJCarsouel() {

  const carsouelRef = useRef()

  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }

  const changePic = (type) => {
    if (type === 'left') {
      carsouelRef.current.prev()
    } else if (type === 'right') {
      carsouelRef.current.next()
    }
  }

  return (
    <>
      <div className={styles.carfather}>
        <Carousel afterChange={onChange} ref={carsouelRef}>
          {
            [icons.slice(0, 18), icons.slice(18, 21)].map((item, index) => {
              return <div className={styles.car} key={index}>
                {
                  item.map(it => {
                    return <div className={styles.pic} key={it.url}>
                      <div
                        className={styles.icon}
                        style={{ backgroundImage: it.url, backgroundPosition: true ? "0 0" : "-49px 0" }}
                      >
                      </div>
                      <p className={false ? styles.active : ''}>{it.txt}</p>
                    </div>
                  })
                }
              </div>
            })
          }
        </Carousel>
        <div onClick={() => changePic('left')} className={styles.carleft}><LeftOutlined /></div>
        <div onClick={() => changePic('right')} className={styles.carright}><RightOutlined /></div>
      </div>
    </>
  )
}
