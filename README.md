# prettier-ts-config

Create file in root of project .prettierrc.js

```angular2html
    module.exports = {
        ...require('@ndj/prettier-ts-config')
    } 
```

Configure your scripts

```angular2html
    "format": "npx prettier '**/src/**/*.{js,jsx,ts,tsx,html,css,scss}' --write",
```