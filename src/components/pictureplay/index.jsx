import React from 'react'
import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'
import { IconMusic, IconPlayCircle } from '@arco-design/web-react/icon'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getSongUrlAction, getCurrentIsPlayAction } from '@/store/action/play'
import { getDetailAction } from '@/store/action/detail'
import { message } from 'antd'

export default function PicturePlay(props) {
  // props
  const { picUrl, playCount, id } = props

  // redux hooks
  const dispatch = useDispatch()

  const { songUrl } = useSelector(state => ({
    songUrl: state.playData.songUrl,
  }), shallowEqual)

  const clickIconPlay = (id) => {
    dispatch(getDetailAction(id))
    dispatch(getSongUrlAction(id))
    if (songUrl.url === null) {
      message.warning('VIP专享')
    }
    dispatch(getCurrentIsPlayAction(true))
  }

  return (
    <>
      <div className={styles.pic}>
        <NavLink className={styles.pivLink} to='#'>
          <img src={picUrl} alt="" />
        </NavLink>
        <div className={styles.view}>
          <div className={styles.left}>
            <IconMusic style={{ fontSize: '16px' }} />
            <span>{parseInt(playCount / 10000)}万</span>
          </div>
          <div className={styles.right}>
            <IconPlayCircle
              style={{ fontSize: '16px' }}
              className={styles.active}
              onClick={() => clickIconPlay(id)}
            />
          </div>
        </div>
      </div>
    </>
  )
}
