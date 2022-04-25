/** @type {import('next').NextConfig}*/
const nextConfig = {
  reactStrictMode: true, images: {
    domains: [
      'th.bing.com',
      'www.pixsy.com',
      'pixy.org',
      'thumbs.dreamstime.com',
      'dutychoice.com'
    ]
  }
}

module.exports = nextConfig
