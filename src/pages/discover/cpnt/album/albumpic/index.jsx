import React from 'react'
import styles from './index.module.scss'

export default function AlbumPic(props) {

  const { songname, nickname, picUrl } = props

  return (
    <>
      <div className={styles.albumbox}>
        <img src={picUrl} alt="" />
        <h4 className='sin-line'>{songname}</h4>
        <p className='sin-line'>{nickname}</p>
      </div>
    </>
  )
}
