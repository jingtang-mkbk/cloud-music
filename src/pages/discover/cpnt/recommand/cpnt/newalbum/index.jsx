import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import { IconArrowRight } from '@arco-design/web-react/icon';
import { connect } from 'react-redux'
import { getNewAlbumAction } from '@/store/action/recommand'
import { Carousel } from "@arco-design/web-react"

function NewAlbum(props) {
  const { recommandData: { newAlbum } } = props

  useEffect(() => {
    props.getNewAlbum(10)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      {/* 标题 */}
      <div className={styles.hotTitle}>
        <div style={{ display: 'flex' }}>
          <div className={styles.circle}></div>
          {/* 新碟上架 */}
          <NavLink to='discover/album' className={styles.title}>新碟上架</NavLink>
        </div>
        <NavLink to='/discover/album' className={styles.linknew}>更多<IconArrowRight /></NavLink>
      </div>
      {/* 图片 */}
      {/*  */}
      <Carousel
        style={{ width: '100%', height: 185 }}
        autoPlay={false}
        indicatorType='dot'
      >
        {
          [0, 1].map((item, index) => {
            return <div className={styles.newDisc} key={index}>
              {
                newAlbum?.slice(item * 5, (item + 1) * 5).map(it => {
                  return <div className={styles.pic} key={it.id}>
                    <img src={it.picUrl} alt="" className={styles.pic2} />
                    <div className={styles.disc}></div>
                    <p className={styles.txt1}>{it.name}</p>
                  </div>
                })
              }
            </div>
          })
        }
      </Carousel>

    </>
  )
}
export default connect(
  state => (
    { recommandData: state.recommandData }
  ),
  {
    getNewAlbum: getNewAlbumAction
  }
)(NewAlbum)