# 🎛️ The Rude Box FX Soundboard
*Because even spreadsheets deserve a soundtrack.*

Welcome, brave audio adventurer, to the **Rude Box FX Soundboard** — the HTML + JS-powered sonic weapon designed to transform your soul-crushing office moments into epic scenes worthy of a Hollywood trailer.  

**🚀 Mission Statement**:  
Turn boring cubicles into booming concert halls. Summon chaos with a keystroke. Make your colleagues question their life choices.  

## 🤔 What is this madness?

**Rude Box FX Soundboard** is a humble but mighty web-based soundboard. It’s perfect for:
- When you just created an epic SQL query
- Mourning a failed Power BI refresh
- Providing live commentary for Teams meetings
- Driving HR slightly insane
- Timing how long it takes your colleague to join the call after “Just one sec”
- Dramatically announcing “Synergy!” during quarterly reviews
- Reacting when someone says “Let’s circle back”
- Adding a soundtrack to your coffee machine’s brewing cycle
- Blasting the chorus of your personal hype song before presenting slides
- Scaring away people hovering near your desk
- Masking the sound of you opening a snack bag in a quiet office
- Playing a victory fanfare after deploying code to production (and it works)
- Summoning existential dread when someone mentions “Scrum of Scrums”
- Accompanying your inner monologue as you write passive-aggressive emails
- Timing your sprint retros with dramatic countdown noises
- Turning a budget meeting into a WWE-style showdown
- Adding custom theme music to your walk to the printer
- Soundtracking every “Sorry, you’re still on mute”
- Honoring the coworker who brings cake with a royal entrance jingle
- Creating your own “Office Bingo” soundtrack
- Helping your brain survive another Monday
- Disrupting the matrix of corporate normality
  
## 🪄 How it works

### 🎧 The Sounds

At the core of the magic is an array called `sounds`.  

It looks like this:

```js
const sounds = [
    {fileName: 'pew-pew.mp3', label: 'Pew Pew', shortkey: 'a', creatorMicro: true},
    {fileName: 'whoopsie-daisy.mp3', label: 'Whoopsie Daisy', shortkey: 'b', creatorMicro: false},
    {fileName: 'kaboom.mp3', label: 'Kaboom!', shortkey: 'c', creatorMicro: true},
    {fileName: 'nerd-alert.mp3', label: 'Nerd Alert', shortkey: 'd', creatorMicro: false},
    {fileName: 'coffee-incoming.mp3', label: 'Coffee Incoming', shortkey: 'e', creatorMicro: true},
    {fileName: 'mind-blown.mp3', label: 'Mind = Blown', shortkey: 'f', creatorMicro: false},
]
```

1. Add your own sound files to the "fx" folder
2. Change the sound array to make your own sounds work
    **fileName**: name of the file
    **label**: name in the grid
    **shortkey**: keyboard key to use to play the sound
    **creatorMicro**: available for the Work Loud Creator Micro (only visual)
3. Have fun!
