# express-ts-eslint
Express JS Boilerplate with Typescript & Eslint & MySQL configured.

### Editor Configuration : [🔗](https://code.visualstudio.com/docs/languages/typescript#_code-actions-on-save)

Install following extensions (for VS Code):
- EditorConfig
- ESLint
- Prettier

For Automatically fixing code in VS Code Editor:

- Open `Settings.json`file using `Ctrl(cmd)+shift+P` and search for `Preferences: Open Settings (JSON)`
- Add/Update the following lines of code:
```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.organizeImports": true,
    }
```
