/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  images: {
      domains: ['lh3.googleusercontent.com', 's3.us-west-2.amazonaws.com'],
  },
  experimental: { images: { layoutRaw: true } }
}

