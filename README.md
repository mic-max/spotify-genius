# Spotify Genius

![Spotify Genius Logo](build/icon.png)

Shows lyric page on Genius of the song playing on Spotify

## Releasing

[Source](https://github.com/samuelmeuli/action-electron-builder#releasing)  
To create a new release:

1. Increase the version in `package.json` (e.g. 1.2.3)
1. Commit that change (git commit -am v1.2.3)
1. Tag your commit (git tag v1.2.3). Make sure your tag name's format is v*.*.*. Your workflow will use this tag to detect when to create a release
1. Push your changes to GitHub (git push && git push --tags)
