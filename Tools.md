# Tool Installation + Notes

Documenting the tools I use along with issues I encountered when installing to have for future reference.

## Node/ NVM

[Node Download Link](https://nodejs.org/en/download)

```
> node -v
v20.11.0
```

[NVM Download Link](https://github.com/coreybutler/nvm-windows)

```
> nvm --version
1.1.12
```

list locally installed versions of node:

```
> nvm ls
```

list of node version available:

```
> nvm ls available
```

install specific version of node:

```
> nvm install xx.x.x
```

use a specific version of node:

```
> nvm use xx.x.x
```

## Git

[Git Download Link](https://git-scm.com/download/win)

I recieved the following error when trying to push for the first time to a new repo:

```
fatal: Authentication failed for [REPO URL]
```

Fixed via the following command:

```
git config --global credential.store manager
```

## VS Code Extension

### Prettier - Code formatter

`File -> Preferences -> Settings `

Search and select `Editor: Format On Save`

### ES7+ React/Redux/React-Native snippets

When writting react code, within the file you can write any of the following commands and it will auto generate the base code:

```
rafc
rafce
rafcp
```

## Chrome Extensions

### React Developer Tools

[React Developer Tools Installation Link](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
