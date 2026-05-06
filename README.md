# Vanilla JavaScript Kanban Board

## 📌 Project Overview

You are building a **Kanban Productivity App** using **pure (vanilla) JavaScript** — no frameworks, no libraries.

This project is designed to help you:

- Think like a real frontend developer
- Understand how apps work under the hood
- Build a structured, scalable JavaScript application

---

## Your Objective

Create a fully functional Kanban board with the following columns:

- **To Do**
- **In Progress**
- **Done**

Users should be able to:

- Add tasks
- Move tasks between columns
- Persist data (so it doesn't disappear on refresh)

---

## Starter Code Structure

```
/kanban-app
  index.html
  /css
    styles.css
  /js
    main.js
    state.js
    /ui
      board.js
      column.js
      task.js
```

---

## How the App Works (Understand This First)

### 1. State (Single Source of Truth)

All your data lives in one place:

```js
state = {
  columns: {
    todo: [],
    doing: [],
    done: [],
  },
};
```

Always update the state first, then re-render the UI.

---

### 2. Rendering System

The UI is generated using JavaScript functions:

- `renderBoard()`
- `renderColumn()`
- `renderTask()`

These functions return HTML strings.

---

### 3. Application Flow

1. User performs an action (click, drag, etc.)
2. You update the **state**
3. You call `render()`
4. The UI updates

---

## 🧪 Tasks & Milestones

### ✅ Phase 1: Basic Functionality

- [ ] Add new tasks
- [ ] Display tasks in the "To Do" column
- [ ] Each task should have:
  - ID
  - Title

---

### ✅ Phase 2: Task Management

- [ ] Add a **delete button**
- [ ] Add **task description**
- [ ] Improve UI (optional but encouraged)

---

### ✅ Phase 3: Drag & Drop (Important)

- [ ] Make tasks draggable
- [ ] Allow dropping into different columns
- [ ] Update state when a task moves

💡 Hint:

```js
dragstart;
dragover;
drop;
```

---

### ✅ Phase 4: Persistence (Must Have)

- [ ] Save state to `localStorage`
- [ ] Load saved data on page refresh

---

### ✅ Phase 5: Advanced Features (Challenge Yourself)

Pick at least TWO:

- [ ] Undo / Redo system
- [ ] Search tasks
- [ ] Filter by column
- [ ] Dark mode toggle
- [ ] Due dates for tasks
- [ ] Keyboard shortcuts

---

## Rules

- ❌ Do NOT use React, Vue, or any framework
- ❌ Do NOT copy a full solution
- ✅ You CAN use documentation (MDN, etc.)
- ✅ You SHOULD break things and fix them

---

## 🧠 Key Concepts You Must Demonstrate

By the end of this project, you should understand:

- State management
- DOM manipulation
- Event handling
- Modular JavaScript (ES Modules)
- Separation of concerns

---

## 🛠 Tips

- Start simple → then improve
- Don’t try to build everything at once
- Break problems into smaller pieces
- Use `console.log()` to debug

---

## 🎓 Submission Requirements

Your project should include:

- A working Kanban board
- Clean, readable code
- At least ONE advanced feature implemented

---

## Final Note

This project is not about perfection.

It’s about learning how real applications are built.

> If your code works and you understand it — you’re winning.

---

## Bonus (Optional)

If you finish early:

- Improve UI design
- Add animations
- Make it mobile responsive

---

**Good luck — build something you're proud of 💪**
