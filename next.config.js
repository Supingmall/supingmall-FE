/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "blog.kakaocdn.net",
      "cdn.pixabay.com",
      "supingmall-image-uploader.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
