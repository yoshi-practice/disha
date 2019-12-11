# Disha

---

## How to run

`gulp / gulp-sass` → `browser-sync`

```
$ npm i
$ npm run start
```

## Deploy

`gulp / gulp-sass`

```
$ npm run build
```

### If you use `Netlify`

| Deploy dir | Deploy command |
|:---:|:---:|
| `./` | `npm run build` |

### If you use `gh-pages`

You should deploy any branch after remove `dist` from `.gitignore`.

## Git commit

`git-cz / commitizen`

```
$ git add .
$ npm run commit
$ git push
````
