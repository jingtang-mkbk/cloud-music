import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '@/store/action/toplist'
import { idAction } from '@/store/action/toplist'

export default function List() {
  const dispatch = useDispatch()

  const topList = useSelector(state => state.topListData.topList, shallowEqual)

  useEffect(() => {
    dispatch(getTopListAction())
  }, [dispatch])

  const handleClick = (id) => {
    dispatch(idAction(id))
    // console.log(id)
  }

  return (
    <>
      <h2 className={styles.title}>云音乐特色榜</h2>
      <ul className={styles.ulbox}>
        {
          topList.slice(0, 4)?.map(it => {
            return <li className={styles.libox} key={it.id} onClick={() => handleClick(it.id)}>
              <img src={it.coverImgUrl} alt="加载中..." />
              <div className={styles.txtbox}>
                <h3 className={styles.txt1}>{it.name}</h3>
                <h4 className={styles.txt2}>{it.updateFrequency}</h4>
              </div>
            </li>
          })
        }
      </ul>
      <h2 style={{ marginTop: '20px' }} className={styles.title} >全球媒体榜</h2>
      <ul className={styles.ulbox}>
        {
          topList.slice(4)?.map(it => {
            return <li className={styles.libox} key={it.id} onClick={() => handleClick(it.id)}>
              <img src={it.coverImgUrl} alt="加载中..." />
              <div className={styles.txtbox}>
                <h3 className={styles.txt1}>{it.name}</h3>
                <h4 className={styles.txt2}>{it.updateFrequency}</h4>
              </div>
            </li>
          })
        }
      </ul>
    </>
  )
}
