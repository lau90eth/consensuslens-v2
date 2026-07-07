export const config = { runtime: 'edge' };

export default async function handler(req) {
  const url = new URL(req.url);
  const target = url.searchParams.get('url');
  if (!target || !target.startsWith('https://explorer-bradbury.genlayer.com')) {
    return new Response('Invalid URL', { status: 400 });
  }
  const res = await fetch(target);
  const data = await res.text();
  return new Response(data, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
