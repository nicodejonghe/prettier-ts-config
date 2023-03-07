module.exports = {
    "singleQuote": true,
    "endOfLine": "auto",
    "bracketSameLine": true,
    "printWidth": 80,
    "bracketSpacing": true,
    "semi": true,
    "trailingComma": "es5",
    "overrides": [
        {
            "files": "*.js",
            "options": {
                "parser": "babel"
            }
        }, {
            "files": "*.html",
            "options": {
                "parser": "angular",
                "htmlWhitespaceSensitivity": "ignore"
            }
        }, {
            "files": "*.md",
            "options": {
                "parser": "markdown",
                "proseWrap": "always"
            }
        }, {
            "files": "*.scss",
            "options": {
                "parser": "scss"
            }
        }, {
            "files": "*.ts",
            "options": {
                "parser": "typescript",
                "singleQuote": true
            }
        }, {
            "files": "*.json",
            "options": {
                "parser": "json"
            }
        }, {
            "files": ["*.yml", "*.yaml"],
            "options": {
                "parser": "yaml"
            }
        }
    ]
}