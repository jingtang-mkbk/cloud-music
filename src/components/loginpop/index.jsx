// @ts-nocheck
import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Modal } from '@arco-design/web-react'
import { getKey, QRCode, checkQRCode } from '@/api/common'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { loginpopAction } from '@/store/action/loginpop'
import { RedoOutlined } from '@ant-design/icons'
import { message } from 'antd'
import { setCookies } from '@/utils/auth'

export default function LoginPop() {
  // hooks
  const visible = useSelector(state => state.loginpopData.visible, shallowEqual)
  const dispatch = useDispatch()

  // state
  const [img, setImg] = useState()
  const [key, setKey] = useState(null)
  const [clickFlag, setClickFlag] = useState(false)

  // visible=false
  const hiddenLoginpop = () => {
    dispatch(loginpopAction(false))
  }

  // 获取二维码  800过期  801等待扫码  802待确认  803登录成功
  useEffect(() => {
    if (visible) {  // 显示loginpop时获取二维码
      const getData = async () => {
        const res = await getKey()
        const { data } = await QRCode(res.data.data.unikey)
        setImg(data.data.qrimg)
        setKey(res.data.data.unikey)
      }
      getData()
    }
    // else //关闭loginpop时停止检测状态
    if (key) {  // 有key时开始检测
      const timer = setInterval(async () => {
        if (visible) {
          const { data } = await checkQRCode(key)
          switch (data.code) {
            case 800:
              setClickFlag(true)
              clearInterval(timer)
              break
            case 801: break
            case 802: break
            case 803:
              clearInterval(timer)    // 清定时器
              dispatch(loginpopAction(false))  // 关闭弹窗
              message.success('登录成功')
              setCookies(data.cookie)
              setKey(null)
              break
            default: break
          }
        }
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [visible, clickFlag, key, dispatch])

  return (
    <>
      <Modal
        title={
          <div style={{ textAlign: 'left' }}>
            <span style={{ color: 'white' }}>登录</span>
          </div>
        }
        visible={visible}
        footer={null}
        onCancel={hiddenLoginpop}
        onOk={hiddenLoginpop}
      >
        <div className={styles.content}>
          <img src={require('../../assets/images/phone.png')} alt="" className={styles.pic} />
          <div className={styles.qrcode}>
            <h5 className={styles.header}>扫码登录</h5>
            <div className={styles.qrcodebox}>
              <img src={img} alt="" className={styles.qrcodeimg} />
              {
                clickFlag ? <div className={styles.reacquire}><RedoOutlined /></div> : <></>
              }
            </div>
            <p className={styles.txt1}> 使用
              <a className={styles.txt2} href='https://music.163.com/#/download' target="_blank" rel="noopener noreferrer"> 网易云音乐APP </a> 扫码登录
            </p>
          </div>
        </div>
      </Modal>
    </>
  )
}
