import Vue from 'vue'

Vue.filter('shortenText', (text, maxLength = 50) => {
  if (text && typeof text === 'string') {
    const finalChar = text.length > maxLength ? '...' : ''
    return text.slice(0, maxLength) + finalChar
  }

  return ''
})

Vue.filter('shortenContent', (text, maxLength = 60) => {
  if (text[0] === '#' && text[1] === '#') {
    text = text.substr(3)
  }

  if (text && typeof text === 'string') {
    const finalChar = text.length > maxLength ? '...' : ''
    return text.slice(0, maxLength) + finalChar
  }

  return ''
})
