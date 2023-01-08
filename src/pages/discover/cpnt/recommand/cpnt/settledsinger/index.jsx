import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import { getSettledSingerAction } from '@/store/action/recommand'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
// import { getSettledSiger } from '@/api/recommand'

export default function SettledSinger() {
  const dispatch = useDispatch()

  const data = useSelector(state => state.recommandData.settledSinger, shallowEqual)

  useEffect(() => {
    dispatch(getSettledSingerAction(5))
  }, [dispatch])

  return (
    <>
      <div className={styles.top}>
        <h4 className={styles.singerh4}>入驻歌手</h4>
        <NavLink className={styles.all} to='#'>查看全部{'>'}</NavLink>
      </div>
      <ul className={styles.singerul}>
        {/* <li className={styles.singerli}>
          <NavLink className={styles.link} to='#'>
            <img className={styles.pic} src="" alt="加载中..." />
            <div className={styles.txt}>
              <h5 className={styles.uname}>张惠妹</h5>
              <p className={styles.detail}>台湾歌手张惠妹</p>
            </div>
          </NavLink>
        </li> */}
        {
          data?.map(it => {
            return <li key={it.id} className={styles.singerli}>
              <NavLink className={styles.link} to='#'>
                <img className={styles.pic} src={it.img1v1Url} alt="加载中..." />
                <div className={styles.txt}>
                  <h5 className={styles.uname}>{it.name}</h5>
                  <p className={styles.detail}>{it.name}</p>
                </div>
              </NavLink>
            </li>
          })
        }
      </ul>
      <button className={styles.singerbtn}>申请成为网易音乐人</button>
    </>
  )
}
