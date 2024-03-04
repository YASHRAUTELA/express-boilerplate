# express-boilerplate
Node JS Boilerplate with below integrations:
- Express JS
- Typescript
- ESLint, Prettier & EditorConfig for auto code formatting.
- MySQL
- Redis
- CRUD

# Supported Node Version
v20.11.1 or later

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
