import fs from "node:fs/promises";

const endpoint = "https://api.indexnow.org/indexnow";
const key = "5e44abdbef34e9c61bf1f96041db29e4";
const siteRoot = "https://misebear.github.io/jejubucketlist-app-support-site";
const keyLocation = `${siteRoot}/indexnow-key.txt`;

const sitemap = await fs.readFile(new URL("../sitemap.xml", import.meta.url), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (urlList.length === 0) {
  throw new Error("No URLs found in sitemap.xml");
}

const response = await fetch(endpoint, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "misebear.github.io",
    key,
    keyLocation,
    urlList,
  }),
});

console.log(JSON.stringify({ status: response.status, urls: urlList.length, keyLocation }, null, 2));

if (![200, 202].includes(response.status)) {
  const responseBody = await response.text();
  throw new Error(`IndexNow submission failed: ${response.status} ${responseBody}`);
}
