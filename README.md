# Spotify Genius

![Spotify Genius Logo](build/icon.png)

Shows lyric page on Genius of the song playing on Spotify

## Releasing

[Source](https://github.com/samuelmeuli/action-electron-builder#releasing)
When you want to create a new release, follow these steps:

1. Update the version in your project's package.json file (e.g. 1.2.3)
1. Commit that change (git commit -am v1.2.3)
1. Tag your commit (git tag v1.2.3). Make sure your tag name's format is v*.*.*. Your workflow will use this tag to detect when to create a release
1. Push your changes to GitHub (git push && git push --tags)

TODO make a version bump npm script to do this for me :)

set GH_TOKEN env var then
`npm run release`
https://docs.npmjs.com/cli/v7/commands/npm-version