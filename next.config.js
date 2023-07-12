/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/",
      },
    ],
  },
};

module.exports = {
  images: {
    domains: ["image.tmdb.org"],
  },
};
