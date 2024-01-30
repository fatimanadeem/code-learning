# Git Notes

Documenting and documentation regarding git that I've found useful to look back on for reference.

## git squash

[Git Squash Commits – Squashing the Last N Commits into One Commit | freecodecamp](https://www.freecodecamp.org/news/git-squash-commits/)

```
git rebase -i HEAD~6
```

When encountering multiple merge conflicts do the following:

`Accept incoming changes`

```
git add .
git rebase --continue
```

At the end you probably will need to do:

```
git push --force origin main
```
