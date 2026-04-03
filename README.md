# Rude Box FX Soundboard
*Because even spreadsheets deserve a soundtrack.*

Welcome, brave audio adventurer, to the **Rude Box FX Soundboard** — the web-powered sonic weapon designed to transform your soul-crushing office moments into epic scenes worthy of a Hollywood trailer.

**Mission Statement**:
Turn boring cubicles into booming concert halls. Summon chaos with a keystroke. Make your colleagues question their life choices.

## What is this madness?

**Rude Box FX Soundboard** is a humble but mighty web-based soundboard. It's perfect for:
- When you just created an epic SQL query
- Mourning a failed Power BI refresh
- Providing live commentary for Teams meetings
- Driving HR slightly insane
- Timing how long it takes your colleague to join the call after "Just one sec"
- Dramatically announcing "Synergy!" during quarterly reviews
- Reacting when someone says "Let's circle back"
- Adding a soundtrack to your coffee machine's brewing cycle
- Blasting the chorus of your personal hype song before presenting slides
- Scaring away people hovering near your desk
- Masking the sound of you opening a snack bag in a quiet office
- Playing a victory fanfare after deploying code to production (and it works)
- Summoning existential dread when someone mentions "Scrum of Scrums"
- Accompanying your inner monologue as you write passive-aggressive emails
- Timing your sprint retros with dramatic countdown noises
- Turning a budget meeting into a WWE-style showdown
- Adding custom theme music to your walk to the printer
- Soundtracking every "Sorry, you're still on mute"
- Honoring the coworker who brings cake with a royal entrance jingle
- Creating your own "Office Bingo" soundtrack
- Helping your brain survive another Monday
- Disrupting the matrix of corporate normality

## How it works

Open `soundboard.html` directly in a browser — no build step, no server, no package manager required.

### Files

| File | Purpose |
|------|---------|
| `soundboard.html` | Main HTML structure |
| `assets/soundboard.css` | Styles, layout, and the gradient background effect |
| `assets/soundboard.js` | Sound config, button generation, and playback logic |
| `fx/` | Your local MP3 sound files (git-ignored) |

### The Sounds

At the core of the magic is the `sounds` array at the top of `assets/soundboard.js`:

```js
const sounds = [
    {label: 'Pew Pew',        fileName: 'pew-pew.mp3',        creatorMicro: true},
    {label: 'Whoopsie Daisy', fileName: 'whoopsie-daisy.mp3', creatorMicro: false},
    {label: 'Kaboom!',        fileName: 'kaboom.mp3',          creatorMicro: true},
];
```

| Field | Description |
|-------|-------------|
| `label` | Display name on the button |
| `fileName` | Must match a file in the `fx/` folder |
| `creatorMicro` | `true` adds a dot indicator for the Work Loud Creator Micro hardware (visual only) |

Shortkeys are auto-assigned by position: index 0 → `a`, index 1 → `b`, and so on. Spacebar triggers a random sound.

### Adding sounds

1. Drop your `.mp3` files into the `fx/` folder
2. Add an entry to the `sounds` array in `assets/soundboard.js`
3. Reload the page

### Layout

- **Mobile**: flexbox wrap
- **Desktop (≥64em)**: 6-column CSS grid
