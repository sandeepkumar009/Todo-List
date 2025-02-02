# Todo List Application

Todo List is a simple and intuitive Todo List application that allows you to manage your tasks with ease. It allows you to add, edit, delete, and mark tasks as completed. It also stores your todos in the local storage, so your data persists even after a page refresh.

## Features

- Add new todos.
- Edit and delete existing todos.
- Mark todos as completed or incomplete.
- Toggle visibility of completed todos.
- Persist data using LocalStorage.

## Technologies Used

- React
- Tailwind CSS
- React Icons
- Local Storage

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sandeepkumar009/Todo-List.git
   ```
2. Navigate to the project directory:
   ```base
   cd Todo-List
   ```
3. Install the required dependencies:
   ```base
   npm install
   ```
4. Run the development server:
    ```base
    npm run dev
    ```
    Open your browser and go to http://localhost:3000 to view the app.

## Project Structure
   ```base
   Todo List
    ├── src
    │   ├── components
    │   │   ├── Navbar.jsx
    │   ├── App.jsx
    |   └── index.css
    ├── index.html
    └── package.json
   ```

## Usage
- Type a task in the input field and click **"Save"** to add it to the list.
- Use the **checkbox** to mark a task as completed.
- Click the **edit button** (✏️) to modify an existing task.
- Click the **delete button** (🗑️) to remove a task.
- Use the "Show Finished" **checkbox** to toggle visibility of completed tasks.
