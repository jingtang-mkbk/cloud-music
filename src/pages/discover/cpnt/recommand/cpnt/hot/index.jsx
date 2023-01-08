import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Space, Divider } from "@arco-design/web-react"
import styles from './index.module.scss'
import { message } from 'antd'
import { IconArrowRight } from '@arco-design/web-react/icon'
import { getHotRecommand } from '@/store/action/recommand'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getCurrentPlayListAction } from '@/store/action/play'
import PicturePlay from '@/components/pictureplay'

export default function Hot() {

  const dispatch = useDispatch()

  const { hot, songUrl, songList } = useSelector(state => ({
    hot: state.recommandData.hot,
    songUrl: state.playData.songUrl,
    songList: state.detailData.songList
  }), shallowEqual)

  // const playList = songList.map(it => it.id)

  useEffect(() => {
    dispatch(getHotRecommand())
  }, [dispatch])

  useEffect(() => {
    if (songList.trackIds) {
      const data = songList.trackIds.map(it => it.id)
      dispatch(getCurrentPlayListAction(data))
    }
    if (songUrl === null) {
      message.warning('VIP专享')
    }
  }, [songList, dispatch, songUrl])


  return (
    <>
      <div className={styles.hotTitle}>
        <div style={{ display: 'flex' }}>
          <div className={styles.circle}></div>
          {/* 热门推荐 */}
          <NavLink to='discover/playlist' className={styles.title}>热门推荐</NavLink>
          {/* 分类 */}
          <Space size={0} split={<Divider type='vertical' />}>
            <NavLink className={styles.route} to='#'>华语</NavLink>
            <NavLink className={styles.route} to='#'>流行</NavLink>
            <NavLink className={styles.route} to='#'>摇滚</NavLink>
            <NavLink className={styles.route} to='#'>民谣</NavLink>
            <NavLink className={styles.route} to='#'>电子</NavLink>
          </Space>
        </div>
        <NavLink to='/discover/playlist' style={{ display: 'block', marginRight: '10px', color: 'black' }}>更多<IconArrowRight /></NavLink>
      </div>
      {/* 图片&文字 */}
      <ul className={styles.hotUl}>
        {
          hot?.map(it => {
            return <li className={styles.hotLi} key={it.id}>
              <PicturePlay picUrl={it?.picUrl} playCount={it?.playCount} id={it?.id} />
              <NavLink to="#" className={styles.txt}>{it.name}</NavLink>
            </li>
          })
        }
      </ul>
    </>
  )
}
