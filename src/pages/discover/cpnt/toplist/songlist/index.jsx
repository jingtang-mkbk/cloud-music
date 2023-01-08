import React from 'react'
import styles from './index.module.scss'
import { IconPlayCircle } from '@arco-design/web-react/icon'
import { useSelector, shallowEqual } from 'react-redux'
import { Icon } from '@arco-design/web-react'
import { mmss } from '@/utils/timestamp'

const IconFont = Icon.addFromIconFontCn({ src: '//at.alicdn.com/t/c/font_3786758_d87rp5uei8w.js' })

export default function SongList() {

  const topListDetail = useSelector(state => state.topListData.listDetail, shallowEqual)
  const { tracks: topListDetailData } = topListDetail

  return (
    <>
      <div className={styles.box}>
        <div className={styles.title}>
          <h2>
            歌曲列表
            <span>{topListDetailData?.length}首歌</span>
          </h2>
          <p>播放 ：<span>{topListDetail?.playCount}</span>次</p>
        </div>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>标题</th>
                <th>时长</th>
                <th>歌手</th>
              </tr>
            </thead>
            <tbody>
              {
                topListDetailData?.map((item, index) => {
                  return <tr key={item.id}>
                    <td>
                      <div className={styles.left}>{index + 1}</div>
                      <div className={styles.right}>
                        <IconFont type='icon-new' style={{ fontSize: 20, color: '#268330' }} />
                      </div>
                    </td>
                    <td>
                      {
                        index <= 2 ?
                          <div className={styles.secbox}>
                            <img src={item.al.picUrl} alt="" className={styles.pic} />
                            <IconPlayCircle className={styles.icon} />
                            <p className='sin-line'>
                              {item.name}
                              <span style={{ color: '#aeaeae' }}>
                                {item.tns ? `-(${item.tns.join('/')})` : ''}
                              </span>
                            </p>
                          </div>
                          :
                          <div className={styles.secbox3afetr}>
                            <IconPlayCircle className={styles.icon} />
                            <p className={styles.txt1}>
                              {item.name}
                              <span style={{ color: '#aeaeae' }}>
                                {item.tns ? `-(${item.tns.join('/')})` : ''}
                              </span>
                            </p>
                          </div>
                      }
                    </td>
                    <td>
                      <div className={styles.hov}>{mmss(item.dt)}</div>
                      {/* <div className={styles.hov1} style={{ display: 'none' }}>
                        <IconPlus />
                        <IconFolderAdd />
                        <IconShareInternal />
                        <IconDownload />
                      </div> */}
                    </td>
                    <td>
                      <p className='sin-line'>
                        {item.ar.map(i => i.name).join('/')}
                      </p>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
