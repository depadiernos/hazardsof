import { getStore, getDeployStore } from "@netlify/blobs";

export default async function(req, context) {
  const construction = getStore("construction");
  await construction.set("nails", "For general carpentry");

  const beauty = getDeployStore("beauty");
  await beauty.set("nails", "For formal events", {
    metadata: { material: "acrylic", sale: true },
  });
  
  const headers = new Headers({
    'netlify-cdn-cache-control': 'durable, max-age=3600',
    'netlify-vary': query="",
  });
  
  const url = new URL(req.url);
  return new Response('hello, new here', { headers });
}
