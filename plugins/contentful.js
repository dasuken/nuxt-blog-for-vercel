const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESS_TOKEN,
})

module.exports = client
