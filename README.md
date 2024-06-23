# Arcadian Cloud Blog

[![Deploy Hugo Static Site](https://github.com/chrishart0/arcadian-cloud-hugo/actions/workflows/deploy.yml/badge.svg)](https://github.com/chrishart0/arcadian-cloud-hugo/actions/workflows/deploy.yml)

Build

```bash
hugo
```

Run Dev

```bash
hugo server -D
```

Deploy
```bash
hugo deploy
```


## Conversion from Wordpress

Command to fix image paths

```
find content/migrated -type f -name '*.md' -print0 | xargs -0 sed -i -E 's/!\[(.*)\]\((images\/[^\)]*)\)/!\[\1\](\/\2)/g'
```