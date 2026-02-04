# Task Manager

A simple Task Manager application built with React and Mantine. The app allows users to create, manage, and track tasks with different priority levels, providing clear visual feedback and basic task statistics.

## Features

### Task Management

* **Add Tasks**: Create new tasks with a title and priority (High / Medium / Low)
* **Display Tasks**: View all tasks in a clean and organized list
* **Toggle Status**: Mark tasks as *Complete* or *Incomplete*
* **Delete Tasks**: Remove tasks with a simple confirmation step

### Basic Organization

* **Task Counter**: Displays total number of tasks and number of completed tasks
* **Visual Priority**: Priority levels are color-coded for quick recognition
* **Status Indication**: Clear visual difference between completed and incomplete tasks

### Technical Implementation

* React **functional components**
* **Form handling** for task creation
* **Basic CSS styling** (inline styles, Mantine styles)
* **Base Responsive layout** using Mantine

## Getting Started

### Prerequisites

* Node.js (LTS version recommended)
* yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VandaEPAM/test-task-manager.git
   cd test-task-manager
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open the app in your browser (usually):

   ```
   http://localhost:3000
   ```

   or the port shown in the terminal.

## Project Structure (Example)

```
src/
├── components/      # Reusable React components
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
├── index.css        # Global styles
```

## Usage

1. Enter a task title in the input field
2. Select a priority level (High / Medium / Low)
3. Add the task using the submit button
4. Toggle task completion status by clicking on the task or checkbox
5. Delete tasks when no longer needed

## Styling & Responsiveness

* Priority is visually highlighted using color coding
* Completed tasks are visually distinct (e.g. strikethrough or muted color)
* Layout adapts to different screen sizes using Mantine features

## Notes

* State is managed locally using `useState`
* No external state management libraries are used
* Designed as a simple, clear demonstration of core React concepts

## License

This project is intended for educational and test purposes.


[Documentation](https://mantine.dev/guides/vite/)
