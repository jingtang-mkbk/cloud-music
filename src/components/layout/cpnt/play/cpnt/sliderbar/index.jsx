import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import { mmss } from '@/utils/timestamp'
import { Slider } from 'antd'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  getSongDetailAction,
  getSongUrlAction,
  getCurrentIndexAction,
  // getCurrentIsPlayAction
  // getCurrentLyricAction,
} from '@/store/action/play'
export default function SliderBar() {
  // useState
  const [nowTime, setNowTime] = useState(0) // 当前播放时间
  const [sliderVal, setSliderVal] = useState(0) // 播放条当前值

  // redux hooks
  const dispatch = useDispatch()
  const { songDetail, songUrl, isPlay, playList, currentIndex } = useSelector(state => ({
    isPlay: state.playData.isPlay,
    songDetail: state.playData.songDetail,
    songUrl: state.playData.songUrl,
    playList: state.playData.playList,
    currentIndex: state.playData.currentIndex
  }), shallowEqual)

  // ref
  const audioRef = useRef()

  // siderbar
  useEffect(() => {
    if (isPlay) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
    const timer = setInterval(() => {
      const value = (audioRef.current.currentTime * 100000) / songDetail.dt
      setSliderVal(parseInt(value))
      const time = mmss(audioRef.current.currentTime * 1000)
      setNowTime(time)
      if (audioRef.current.ended) {
        if ((currentIndex + 1) === playList.length) {
          dispatch(getCurrentIndexAction(0))
        } else {
          dispatch(getCurrentIndexAction(currentIndex + 1))
        }
        // dispatch(getCurrentIsPlayAction(!isPlay))
        // dispatch((playList[currentIndex]))
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [isPlay, songDetail.dt, currentIndex, dispatch, playList.length])

  // 获取歌曲数据
  useEffect(() => {
    if (playList[currentIndex]) {
      dispatch(getSongDetailAction(playList[currentIndex]))
      dispatch(getSongUrlAction(playList[currentIndex]))
      // dispatch(getCurrentLyricAction(playList[currentIndex])) // 歌词
    }
  }, [dispatch, playList, currentIndex])

  // slider滑动控制
  const sliderChange = (percentage) => {
    if (songDetail.dt) {
      const val = percentage * songDetail.dt / 100000
      audioRef.current.currentTime = val.toFixed(2)
    }
    setSliderVal(percentage)
  }



  return (
    <>
      <div className={styles.slider}>
        <img src={songDetail?.al?.picUrl} alt="" />
        <div className={styles.txtslider}>
          <div className={styles.txt}>
            <p className='sin-line' style={{ margin: "0 20px 0 0" }}>{songDetail?.name}</p>
            <p className='sin-line' style={{ margin: "0", width: "300px" }}>{songDetail?.ar?.map(it => it.name).join('/')}</p>
          </div>
          <div className={styles.sliderrail}>
            <Slider
              min={0}
              max={100}
              tooltip={{ formatter: null }}
              style={{ width: '466px' }}
              onChange={sliderChange}
              value={sliderVal}
            />
            <audio
              ref={audioRef}
              src={songUrl ? songUrl.url : ''}
              preload="auto"
            />
            <p>
              <span>{nowTime ? nowTime : '00:00'}</span>
              <span> / {mmss(songDetail?.dt) ? mmss(songDetail?.dt) : '00:00'}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
