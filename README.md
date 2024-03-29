# express-boilerplate
Node JS Boilerplate with below integrations:
- Express JS
- Typescript
- ESLint, Prettier & EditorConfig for auto code formatting.
- MySQL
- Redis
- CRUD
- File Upload
- Docker Configuration

# Supported Node Version
v20.11.1 or later

### Editor Configuration : [🔗](https://code.visualstudio.com/docs/languages/typescript#_code-actions-on-save)

Install following `VSCode Editor` extensions:
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
