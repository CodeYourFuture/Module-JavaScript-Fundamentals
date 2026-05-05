## Clean Code and Smart Commits: A Practical Guide

### 1. Formatting code consistently

- In VS Code, right-click anywhere in the editor and choose "Format Document" from the context menu.

- You can also use the shortcut:
  - Windows/Linux: `Shift + Alt + F`
  - macOS: `Shift + Option + F`

- More details: https://code.visualstudio.com/docs/editing/codebasics#_formatting

---
### 2. Enabling automatic formatting

- Open your VS Code settings (user or workspace settings).
  - Guide: https://code.visualstudio.com/docs/getstarted/settings#_creating-user-and-workspace-settings
- Search for `editor format`
- Set `editor.formatOnSave` and `editor.formatOnPaste` to true

This ensures your code stays clean without needing manual formatting each time.

---

### 3. Committing files often, in meaningful groups

Creating small, focused commits improves both your workflow and team collaboration.

Why this matters:
- **Clarity**: Each commit tells a clear story (one feature, one fix, one change).
- **Debugging**: Easy to find and undo the commit that caused a bug.
- **Collaboration**: Teammates can review and understand changes faster.
- **History**: Project log becomes a readable timeline, not a messy dump.
- **Safety**: Progress is saved in safe, logical steps—less risk of losing work.

#### Appraoch 1: Using VS Code

- In the Source Control panel, stage individual files instead of all changes.
- Commit only what is staged.
- Watch this video (around 12:50): https://www.youtube.com/watch?v=z5jZ9lrSpqk&t=705

#### Approach 2: Using Git commands

1. Stage a changed file (`git add`)
  
e.g.: To stage a modified file named `index.html`
```
git add index.html
```

2. Commit the staged changes: (`git commit`)

e.g.: To commit the staged changes with a short commit message
```
git commit -m "Fix syntax error"
```

- Additional resource: [W3School Git Tutorial](https://www.w3schools.com/git/default.asp?remote=github)
