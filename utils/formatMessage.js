export function formatCreatorMessage(c) {
  const socials = [];
  const s = c.socials || {};

  if (s.twitter?.username)
    socials.push(`🐦 <b>Twitter:</b> <a href="https://x.com/${s.twitter.username}">@${s.twitter.username}</a> (${c.followers.twitter})`);
  if (s.farcaster?.username)
    socials.push(`💬 <b>Farcaster:</b> ${s.farcaster.username} (${c.followers.farcaster})`);
  if (s.instagram?.username)
    socials.push(`📸 <b>Instagram:</b> ${s.instagram.username} (${c.followers.instagram})`);
  if (s.tiktok?.username)
    socials.push(`🎵 <b>TikTok:</b> ${s.tiktok.username} (${c.followers.tiktok})`);

  const text = `
<b>🔥 New Creator Listed!</b>

👤 <b>${c.name}</b> (@${c.handle})
💰 Market Cap: ${c.marketCap}
📜 Contract: <code>${c.address}</code>
👥 Followers (Zora): ${c.followers.zora}

${socials.join("\n")}
  `;

  const buttons = [
    [{ text: "🚀 Auto Trade", url: `https://zora.co/creator/${c.handle}` }],
  ];

  return { text, buttons, photo: c.avatar };
}
