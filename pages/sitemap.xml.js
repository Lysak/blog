import React from "react";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({res}) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<url>
  <loc>https://blog.lysak.ml/</loc>
  <lastmod>2022-10-27T19:08:21+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://blog.lysak.ml/posts/what-is-the-first-step-for-being-an-it</loc>
  <lastmod>2022-10-27T19:08:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://blog.lysak.ml/posts/hello-world</loc>
  <lastmod>2022-10-27T19:08:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
</urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
