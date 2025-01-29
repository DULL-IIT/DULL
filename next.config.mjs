/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static site export
    basePath: "/DULL", // Replace with your GitHub repo name
    assetPrefix: "/DULL/",
    images: {
        unoptimized: true, // Ensures images load properly in static export
      }, // Helps with serving static assets
  };
  
  export default nextConfig
  