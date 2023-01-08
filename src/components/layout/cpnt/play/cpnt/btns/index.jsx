import React, { useEffect } from 'react'
import styles from './index.module.scss'
import {
  BackwardOutlined,
  PlayCircleOutlined,
  ForwardOutlined,
  PauseCircleOutlined
} from '@ant-design/icons'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  getCurrentIsPlayAction,
  getCurrentPlayListAction,
  getCurrentIndexAction
} from '@/store/action/play'
import { getTopListAction } from '@/store/action/recommand'

export default function Btns() {

  // redux hooks
  const dispatch = useDispatch()

  const { isPlay, upList, currentIndex } = useSelector(state => ({
    isPlay: state.playData.isPlay,
    currentIndex: state.playData.currentIndex,
    upList: state.recommandData.upList
  }), shallowEqual)

  // 副作用
  useEffect(() => {
    if (upList) {
      const data = upList.map(it => it.id)
      dispatch(getCurrentPlayListAction(data))
    }
  }, [upList, dispatch])

  useEffect(() => {
    dispatch(getTopListAction(19723756))
  }, [dispatch])

  // 播放暂停
  const play = (done) => {
    dispatch(getCurrentIsPlayAction(done))
  }

  // 切歌
  const changeSong = (val) => {
    if (val === 'pre') {
      if (currentIndex === 0) {
        const last = upList.length - 1
        dispatch(getCurrentIndexAction(last))
      } else {
        dispatch(getCurrentIndexAction(currentIndex - 1))
      }
    }
    else if (val === 'next') {
      if (currentIndex === (upList.length - 1)) {
        dispatch(getCurrentIndexAction(0))
      } else {
        dispatch(getCurrentIndexAction(currentIndex + 1))
      }
    }
  }


  return (
    <>
      <div className={styles.playicon}>
        <BackwardOutlined onClick={() => changeSong('pre')} />
        {
          !isPlay ?
            <PlayCircleOutlined onClick={() => play(true)} />
            : <PauseCircleOutlined onClick={() => play(false)} />
        }

        <ForwardOutlined onClick={() => changeSong('next')} />
      </div>
    </>
  )
}
