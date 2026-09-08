# Todo App 📝

A modern, feature-rich to-do list application built with Next.js, React, and TypeScript. Manage your tasks efficiently with priority levels, due dates, and persistent local storage.

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Create new tasks with just a few clicks
- ✅ **Mark Complete** - Check off tasks as you complete them
- �� **Delete Tasks** - Remove tasks you no longer need
- ✅ **Edit Tasks** - Update task text, priority, and due date
- ✅ **Local Storage** - All your tasks persist across browser sessions

### Advanced Features
- 🎯 **Priority Levels** - Set tasks as Low, Medium, or High priority
- 📅 **Due Dates** - Add optional due dates to your tasks
- 🔔 **Overdue Detection** - Get visual feedback for overdue tasks
- 📊 **Statistics** - Track completion rate and task counts
- 🔍 **Filter Options** - View All, Active, or Completed tasks
- ↔️ **Sort Options** - Sort by date added or by priority
- 🗑️ **Clear Completed** - Quickly remove all completed tasks
- 🎨 **Beautiful UI** - Modern, responsive design with smooth animations

## 🛠️ Technologies Used

- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **CSS Modules** - Scoped styling for components
- **Local Storage API** - Browser storage for persistence

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SANTAMANZIO/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
todo-app/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── TodoApp.tsx         # Main app component
│   ├── TodoForm.tsx        # Add task form
│   ├── TodoList.tsx        # Tasks list display
│   ├── TodoStats.tsx       # Statistics panel
│   ├── TodoFilter.tsx      # Filter and sort controls
│   └── *.module.css        # Component styles
├── package.json            # Dependencies
├── tsconfig.json          # TypeScript config
├── next.config.js         # Next.js config
└── README.md              # This file
```

## 🎨 UI Components

### TodoApp
Main component that manages state and local storage

### TodoForm
Form for creating new tasks with priority and due date

### TodoList
Displays all tasks with edit and delete functionality

### TodoStats
Shows statistics about your tasks

### TodoFilter
Controls for filtering and sorting tasks

## 💾 Local Storage

Tasks are automatically saved to browser's local storage whenever you:
- Add a new task
- Complete or uncomplete a task
- Edit a task
- Delete a task

Data persists across browser sessions until cleared.

## 🎯 Usage

1. **Add a Task**
   - Type task description
   - Select priority (Low, Medium, High)
   - Optionally add a due date
   - Click "Add Task"

2. **Edit a Task**
   - Hover over a task and click the pencil icon
   - Modify the task details
   - Click Save

3. **Complete a Task**
   - Click the checkbox next to a task

4. **Delete a Task**
   - Click the trash icon on the task

5. **Filter Tasks**
   - Use the filter buttons: All, Active, Completed

6. **Sort Tasks**
   - Choose sort order: Date Added or Priority

## 🌐 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

Fully responsive layout that works on:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Color Scheme

- **Primary**: Indigo (#4f46e5)
- **Secondary**: Emerald (#10b981)
- **Danger**: Red (#ef4444)
- **Warning**: Amber (#f59e0b)
- **Background**: Light Gray (#f9fafb)

## 📝 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 📧 Contact

For questions or suggestions, feel free to reach out.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then connect your repo to Netlify
```

---

**Happy task managing! 🎉**
