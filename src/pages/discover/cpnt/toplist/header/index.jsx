import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import {
  IconClockCircle,
  IconPlayCircle,
  IconPlus,
  IconFolderAdd,
  IconShareInternal,
  IconDownload,
  IconMessage
} from '@arco-design/web-react/icon'
import { getTopListDetailAction } from '@/store/action/toplist'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { mmdd } from '@/utils/timestamp'

export default function Header() {
  const dispatch = useDispatch()
  const [data, setData] = useState()
  const [date, setDate] = useState()
  const { id, listDetail, topList } = useSelector(state => ({
    id: state.topListData.id,
    listDetail: state.topListData.listDetail,
    topList: state.topListData.topList
  }), shallowEqual)

  useEffect(() => {
    dispatch(getTopListDetailAction(id))
    const res = topList?.filter(it => {
      return it.id === id ? it : null
    })

    setDate(mmdd(res[0]?.updateTime))
    setData(res[0]?.updateFrequency)
  }, [id, dispatch, topList])

  return (
    <>
      <div className={styles.box}>
        <div className={styles.pic}>
          <img src={listDetail.coverImgUrl} alt="" />
        </div>
        <div className={styles.content}>
          <h2>飙升榜</h2>
          <h3>
            <IconClockCircle style={{ fontSize: '16px', color: '#666' }} />
            <span style={{ marginLeft: '10px', color: '#666' }}>最近更新：</span>
            <span>{date}</span>
            <span style={{ marginLeft: '10px', color: '#999' }}>
              {`(${data})`}</span>
          </h3>
          <div className={styles.btn}>
            <button><IconPlayCircle className={styles.iconsize} /><span >播放</span></button>
            <button><IconPlus className={styles.iconsize} /></button>
            <button><IconFolderAdd className={styles.iconsize} />
              <span>{'(' + listDetail.subscribedCount + ")"}</span>
            </button>
            <button><IconShareInternal className={styles.iconsize} />
              <span>{'(' + listDetail.shareCount + ")"}</span>
            </button>
            <button><IconDownload className={styles.iconsize} />
              <span>下载</span>
            </button>
            <button><IconMessage className={styles.iconsize} />
              <span>{'(' + listDetail.commentCount + ")"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
