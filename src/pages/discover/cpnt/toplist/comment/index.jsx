import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Input, Divider } from '@arco-design/web-react'
import { IconThumbUp } from '@arco-design/web-react/icon'
import { getCommentAction } from '@/store/action/toplist'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { yyyymmdd } from '@/utils/timestamp'

const TextArea = Input.TextArea

export default function Comment() {
  const dispatch = useDispatch()

  const { comment, id } = useSelector(state => ({
    comment: state.topListData.comment,
    id: state.topListData.id
  }), shallowEqual)


  useEffect(() => {
    dispatch(getCommentAction(19723756, 2))
  }, [dispatch])

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <h2>评论<span>共{1}条评论</span></h2>
      </div>
      <div className={styles.comment}>
        <img src="" alt="加载中..." />
        <TextArea
          placeholder='请输入...'
          style={{ minHeight: 60, width: 605, border: '1px solid #ccc' }}
        />
      </div>
      <div className={styles.btn}>
        <div>@</div>
        <button>评论</button>
      </div>
      <div className={styles.title2}><h3>精彩评论</h3></div>
      {
        comment?.map(it => {
          return <div className={styles.item} key={it.commentId}>
            <img src={it.user.avatarUrl} alt="loading..." />
            <div className={styles.txt}>
              <h4>{it.user.nickname}：<span>{it.content}</span></h4>
              <h5>
                <div>{yyyymmdd(it.time)}</div>
                <div>
                  <IconThumbUp style={{ color: '#0c73c2', fontSize: '16px' }} /> <span>{`(${it.likedCount})`}</span>
                  <Divider type='vertical' />
                  <span>回复</span>
                </div>
              </h5>
            </div>
          </div>
        })
      }

    </div>
  )
}
