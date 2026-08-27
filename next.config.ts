import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allows the dev server's JS/CSS chunks to load when previewed through a
  // tunnel (cloudflared/localtunnel), whose public hostname differs from
  // localhost and would otherwise be blocked by Next's dev CSRF guard.
  allowedDevOrigins: ["*.trycloudflare.com", "*.loca.lt"],
};

export default nextConfig;
