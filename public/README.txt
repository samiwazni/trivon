Put your two logo files in this /public folder, with these exact names:

  trivon_marke.png         → your DARK logo  (shown on the light theme)
  trivon_marke-white.png   → your WHITE logo (shown on the dark theme)

Next.js serves anything in /public from the site root, so the nav
references them as "/trivon_marke.png" and "/trivon_marke-white.png".

The nav swaps between them automatically based on the active theme.
If a file is missing, the nav falls back to the text wordmark "Trivon".

To resize: edit `.logo { height: 26px; }` in app/globals.css.
