// https://remysharp.com/2019/11/04/nice-imports-with-nextjs#:~:text=const%20path%20%3D%20require('path')%3B
const path = require("path")

module.exports = {
  webpack: (config) => {
    config.resolve.alias["~"] = path.resolve(__dirname)
    return config
  },
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GRAPHQL_DEBUG: true,
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  },
}
