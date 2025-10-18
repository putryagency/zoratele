const { KV_REST_API_URL, KV_REST_API_TOKEN } = process.env;

export async function getStoredCreators() {
  const res = await fetch(`${KV_REST_API_URL}/get/creators`, {
    headers: { Authorization: `Bearer ${KV_REST_API_TOKEN}` },
  });
  const json = await res.json();
  return json?.result ? JSON.parse(json.result) : [];
}

export async function storeCreator(address) {
  const current = await getStoredCreators();
  current.push(address);
  await fetch(`${KV_REST_API_URL}/set/creators`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_REST_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: JSON.stringify(current) }),
  });
}
