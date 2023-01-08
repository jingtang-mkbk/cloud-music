// mm:ss
export function mmss(timeStamp){
  const mm = Math.floor(timeStamp / 60000) >= 10 ? Math.floor(timeStamp / 60000) : '0' + Math.floor(timeStamp / 60000)
  const ss = parseInt((timeStamp % 60000) / 1000) >= 10 ? parseInt((timeStamp % 60000) / 1000) : '0' + parseInt((timeStamp % 60000) / 1000)

  return `${mm}:${ss}`
}

export function yyyymmdd(timeStamp) {

  const date = new Date(timeStamp);
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  const D = date.getDate() + ' ';
  // h = date.getHours() + ':';
  // m = date.getMinutes() + ':';
  // s = date.getSeconds(); 

  return (Y+M+D)
}

export function mmdd(timeStamp) {
  const date = new Date(timeStamp)
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
  const D = date.getDate() + '日';

  return (M+D)
}
