/** @type {import('next').NextConfig} */
const nextConfig = {
  //자동으로 웹팩이 build 시에 svg 파일을 react component화 시켜준다.
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
