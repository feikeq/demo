// const moment = require('moment')
// moment.locale('zh-CN')
export default {
  /**
   * 格式化时间
   * @param {number}
   */
  formatTime2(number) {
    console.log('....format2Time....')
    return '2K'
  },

  /**
   * 匹配文本中的url
   * @param {string} str
   * @return {array}
   */
  matchUrl(str) {
    if (typeof str !== 'string') {
      return []
    }
    return (
      str.match(
        /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
      ) || []
    )
  },
  /**
   * 处理文本（分割文本和链接）
   * @param {string} str
   * @return {array}
   */
  splitContentToArray(str) {
    if (typeof str !== 'string') {
      return []
    }
    let i = 1
    // 提取链接
    let urls = this.matchUrl(str)
    if (urls.length === 0) {
      return [{ id: i, type: 'text', value: str }]
    }
    let splitContent = str.split(
      /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/
    )
    // 分隔文本和链接
    splitContent = splitContent.reduce((prev, curr) => {
      if (curr === '') {
        return prev
      }
      if (/^(https?|ftp|file)$/.test(curr)) {
        let url = urls.shift() || ''
        prev = prev.concat({
          id: i++,
          type: 'url',
          value: url.length > 40 ? url.slice(0, 40) + '...' : url,
          url,
        })
      } else {
        prev = prev.concat({ id: i++, type: 'text', value: curr })
      }
      return prev
    }, [])
    return splitContent
  },
}

//js 转秒钟转为00:00格式 by FeikeQ
export const realFormatSecond = (second) => {
  var secondType = typeof second
  if (secondType === 'number' || secondType === 'string') {
    second = parseInt(second)
    var mimute = Math.floor(second / 60)
    second = second - mimute * 60
    var _addZero_mimute = mimute < 10 ? '0' + mimute : mimute
    return _addZero_mimute + ':' + ('0' + second).slice(-2)
  } else {
    return '00:00'
  }
}
