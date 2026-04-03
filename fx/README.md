# fx Folder

This folder holds your MP3 sound files for the Rude Box FX Soundboard.

> Files in this folder are ignored by git (via `.gitignore`) and won't be uploaded to GitHub. Place your `.mp3` files here locally to customise your soundboard.

Each file must be referenced by name in the `sounds` array in `assets/soundboard.js`:

```js
{label: 'Your Label', fileName: 'your-file.mp3', creatorMicro: false}
```

Enjoy summoning sonic chaos.
