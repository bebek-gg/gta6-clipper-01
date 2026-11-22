# AGENT.md — gta6-clipper-01

The loop for this entry, in order:

1. **Moment** — Kai Cenat GTA 6 launch stream, Twitch VOD 1 (v2932305259),
   01:58:45–01:59:05. Jason beats two NPCs in a sunny parking lot while Kai
   shouts. Re-verify by extracting frames from the source segment and looking
   at them; do not trust the timestamp alone.
2. **Creative** — Windah split-screen (facecam top on red + white ring,
   gameplay bottom, static framing), big Indonesian captions, ad disclosure
   in the first 3s, no-background ClipUp.live logo, and a make.fun pitch
   overlay in the last 5 seconds. Decide wording, size, and placement in
   session and verify frames at t=1s, t=10s, t=17s.
3. **Render** — single ffmpeg pass. Encoding rule that cost an hour to learn:
   put `-loop 1` before the logo `-i`, and `-t 20` as a true OUTPUT option
   (after codec flags, before the output file). Otherwise the output balloons
   to ~1000s / 100+ MB. Target: 720x1280, 20.0s, ~20 MB.
4. **Handoff** — the video is posted by the human (public Short on
   @andylaw16). The real YouTube URL goes into VIDEO.json, then the entry is
   submitted to make.fun before Mon 2026-11-23 08:00 WIB. Also submit the
   link to the Content Rewards Kai Cenat campaign within 30 minutes of
   posting. Do not submit anything from this repo until VIDEO.json is real.
