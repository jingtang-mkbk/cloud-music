// @ts-nocheck
import React from 'react'
import styles from './index.module.scss'
import CarouselCpnt from './cpnt/carousel';
import Hot from './cpnt/hot';
import NewAlbum from './cpnt/newalbum';
import List from './cpnt/list'
import SettledSinger from './cpnt/settledsinger'
import HotAnchor from './cpnt/hotanchor';
import UserLogin from './cpnt/userlogin';
import Download from './cpnt/download';

export default function Discover() {

  return (
    <>
      <div className="w">
        <div className={styles.left}>
          <CarouselCpnt />
          <div className={styles.content}>
            <Hot />
            <NewAlbum />
            <List />
          </div>
        </div>

        <div className={styles.right}>
          <Download />
          <UserLogin />
          <div style={{ margin: '20px' }}>
            <SettledSinger />
            <HotAnchor />
          </div>
        </div>
      </div>
    </ >
  )
}
