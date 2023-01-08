import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import PicturePlay from '@/components/pictureplay'
import { getPlayListDataAction } from '@/store/action/playlist'
import { Pagination } from 'antd'

export default function ListOfPlayList() {

  // redux hooks
  const dispatch = useDispatch()
  const { playLists, total, catagoryID } = useSelector(state => ({
    playLists: state.playListData.playLists,
    total: state.playListData.total,
    catagoryID: state.playListData.catagoryID
  }), shallowEqual)

  // 副作用 通过ID获取歌单列表
  useEffect(() => {
    if (catagoryID) {
      dispatch(getPlayListDataAction(catagoryID, 35))
    }
  }, [dispatch, catagoryID])

  // useEffect(() => {
  //   if (total) {
  //     // const times = Math.ceil(total / 100)
  //     // dispatch(getPlayListDataAction(catagoryID, total))
  //   }
  // }, [dispatch, total])

  // 分页器
  const [current, setCurrent] = useState(1)
  const onChange = (page) => {
    const timestamp = playLists[playLists.length - 1].updateTime
    // console.log(timestamp)
    setCurrent(page)
    dispatch(getPlayListDataAction(catagoryID, 35, timestamp))
  }

  return (
    <>
      <ul className={styles.listul}>
        {
          playLists ?
            playLists.map(it => {
              return <li key={it.id}>
                <PicturePlay picUrl={it.coverImgUrl} playCount={it.playCount} id={it.id} />
                <div className={styles.txt}>
                  <p className='sin-line'>{it.name}</p>
                  <p className='sin-line'>
                    <span>by</span>
                    {it.creator.nickname}
                    <img src={it.creator.avatarDetail.identityIconUrl} alt="" />
                  </p>
                </div>
              </li>
            }) :
            <></>
        }
      </ul>
      <div className={styles.page}>
        <Pagination
          current={current}
          onChange={onChange}
          total={total}
          showSizeChanger={false}
          showTitle={false}
          style={{ color: 'black' }}
        />
      </div>
    </>
  )
}
