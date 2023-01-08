import request from '../utils/request'

// 获取二维码key
export const getKey = () => {
  return request({
    url: '/login/qr/key'
  })
} 

// 生成二维码
export const QRCode = (key) => {
  return request({
    url: `/login/qr/create?qrimg=true&key=${key}`
  })
}

// 检测 二维码状态
export const checkQRCode = (key) => {
  const timestamp = new Date()
  return request({
    url: `/login/qr/check?key=${key}&timestamp=${timestamp}`
  })
}

// 登录状态
export const checkLoginStatus = () => {
  return request({
    url: '/login/status'
  })
}

// 获取用户详情
export const getUserDetail = (uid) => {
  return request({
    url: `/user/detail?uid=${uid}`
  })
}

// 歌单详情
export const getSongDetail = (ids) => {
  return request({
    url: `/song/detail?ids=${ids}`
  })
}

// 歌词详情
export const getLyric = (id) => {
  return request({
    url: `/lyric?id=${id}`
  })
}

// 获取歌曲url
export const getSongUrl = (id) => {
  return request({
    url: `/song/url?id=${id}`
  })
}