/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
  images:{
    domains: ["image.tmdb.org","rb.gy","example.com",'res.cloudinary.com',"m.media-amazon.com" ],
  },
}

module.exports = nextConfig
