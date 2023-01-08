import React, { useEffect } from 'react'
import styles from './index.module.scss'
import List from './list'
import Header from './header'
import SongList from './songlist'
import Comment from './comment'
import { useDispatch } from 'react-redux'
import { getTopListDetailAction } from '@/store/action/toplist'

export default function TopList() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListDetailAction(19723756))
  }, [dispatch])

  return (
    <>
      <div className="w">
        <div className={styles.left}>
          <List />
        </div>
        <div className={styles.right}>
          <Header />
          <SongList />
          <Comment />
        </div>
      </div>
    </>
  )
}
