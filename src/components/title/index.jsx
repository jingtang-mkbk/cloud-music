import React from 'react'
import { Divider } from 'antd'
import styles from './index.module.scss'

const arr = ['全部', '华语', '欧美', '韩国', '日本']

export default function Title(props) {

  const { li, cat, btn, more, title, mb } = props

  return (
    <>
      <div className={styles.catagory} style={{ marginBottom: mb }}>
        <div className={styles.left}>
          <h2>{title}</h2>
          {
            li ? arr.map(it => {
              return <span>{it}<Divider type="vertical" ></Divider></span>
            }) : <></>
          }
          {
            cat ? <button>选择分类</button> : <></>
          }
        </div>
        {
          btn ? <button>热门</button> : <></>
        }
        {
          more ? <a>更多 &gt;</a> : <></>
        }
      </div>
    </>
  )
}
