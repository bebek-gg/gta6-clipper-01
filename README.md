# gta6-clipper-01 — Kai Cenat GTA 6 Rampage Clip

![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)
![rank](https://make.fun/badge/gta6-clipper-01/bebek-gg/gta6-clipper-01/rank.svg)
![reward](https://make.fun/badge/gta6-clipper-01/bebek-gg/gta6-clipper-01/reward.svg)

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
([gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01), $500 USDC escrowed,
20 places paid). The video is a 20-second vertical Short cut from Kai Cenat's
GTA 6 launch stream, built to hold a viewer from the first frame to the last.

## The moment

Kai Cenat's GTA 6 launch stream, Twitch VOD 1 (`v2932305259`),
**01:58:45–01:59:05**. Jason (grey plaid shirt) confronts two NPCs outside
Cousin Carlo's pizza place in a sunny parking lot, punches them, and stomps
both on the ground while Kai shouts — then gets busted by the cops. It is the
highest-energy beat in the opening hours of the stream: a confrontation that
escalates into a brawl within seconds, with Kai's facecam reaction selling it.
The bright daylight parking lot reads clearly in vertical format, which is why
this moment was chosen over the dialogue and scene moments from the same VOD.

## The clip

- **Format:** 720x1280 (9:16), 30fps, 20 seconds, original audio.
- **Layout (Windah split-screen):** facecam top ~43% on a solid red
  background with a white ring, gameplay bottom ~57%, static framing — no
  face-tracking pan.
- **Captions:** "KAI CENAT NGAMUK" / "GEBUKIN NPC", big white text with a
  black border across the divider.
- **Ad disclosure:** "IKLAN BERBAYAR" / "PAID PROMOTION" in the first 3
  seconds (the same Short also enters the Content Rewards Kai Cenat $10,000
  pool, which requires it).
- **make.fun pitch (last 5 seconds, t=15–20):** a dark translucent box over
  the gameplay with "MAKE CLIPS LIKE THIS WITH AI" / "AND EARN MONEY ON
  MAKE.FUN" / "make.fun/bounty/gta6-clipper-01".
- **Branding:** "BEBEK CLIPS" watermarks and the no-background ClipUp.live
  logo, bottom-right.

## How the video was made

The 20-second source segment was trimmed from the Twitch VOD and re-verified
frame by frame in the build session (frames at 5s and 10s confirmed the
confrontation and the punch/stomp). The render is a single ffmpeg pass:
facecam cropped from the bottom-left of the 720p source and upscaled, gameplay
cropped and stacked below, captions, watermarks, disclosure, the make.fun
pitch overlay, and the transparent ClipUp.live logo composited in one chain.
Encoded with libx264 (8 Mbps capped, ultrafast preset) to ~20 MB.

## Repo layout

- `VIDEO.json` — the video's YouTube address. Currently a placeholder
  (`https://www.youtube.com/shorts/PLACEHOLDER`); the real Shorts URL is
  filled in once the video is posted on YouTube.
- `main.ts` — Node 22, stdlib only, no network. Reads `VIDEO.json` from the
  repo root (`MAKEFUN_BOT_DIR`) and copies it byte-for-byte to
  `$MAKEFUN_OUTPUT_DIR/VIDEO.json`, verifying the copy. Prints nothing on
  success.
- `LICENSE` — MIT.

## Run

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# out/VIDEO.json is byte-for-byte the repo's VIDEO.json
```

## Status

Video posted as a public Short on YouTube (channel @andylaw16). `VIDEO.json`
will carry the real URL before the entry is submitted. Entries close
Mon 2026-11-23 01:00 UTC (08:00 WIB).

## Posting checklist (one post, two shots)

1. Post the Short as **public** on @andylaw16 with the bounty description
   line and the make.fun play code.
2. Within **30 minutes** of posting, submit the link in the Content Rewards
   Kai Cenat $10,000 pool campaign (same Short, second shot at a payout).
3. Copy the real YouTube Shorts URL into `VIDEO.json`, then submit this
   repo to make.fun before the deadline.
