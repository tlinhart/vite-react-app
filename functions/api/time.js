export async function onRequestGet(context) {
  const { request, env, params, waitUntil, next, data } = context;

  return new Response(JSON.stringify({ time: new Date().toISOString() }), {
    headers: { "Content-Type": "application/json" },
  });
}
