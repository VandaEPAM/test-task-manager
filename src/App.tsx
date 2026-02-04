import "@mantine/core/styles.css";
import { Box, Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { TaskForm } from './components/task-form';
import { TaskList } from "./components/task-list";
import { useState } from "react";
import { TaskCounter } from "./components/task-counter";

const toTask = (values: any) => ({
  id: Date.now(), // Simple ID generation acceptable
  title: values.title,
  priority: values.priority, // "high" | "medium" | "low"
  completed: false,
  createdAt: new Date().toISOString()
});

// TODO: Add TypeScript types
export default function App() {
  const [tasks, setTasks] = useState<any[]>([]);

  const handleSubmitTask = (values: any) => {
    setTasks((prev) => [...prev, toTask(values) ])
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: number, isCompleted: boolean) => {
    setTasks((prev) => prev.map((task) => {
      if (task.id !== id) {
        return task;
      }

      return {
        ...task,
        completed: isCompleted,
      };
    }))
  };

  return (
    <MantineProvider theme={theme}>
      <Container strategy="grid" size='md' bg='var(--mantine-color-blue-light)'>
        <Box><TaskForm onSubmit={handleSubmitTask} /></Box>
        <Box><TaskCounter tasks={tasks} /></Box>
        <Box><TaskList tasks={tasks} onComplete={toggleComplete} onDelete={handleDeleteTask} /></Box>
      </Container>
    </MantineProvider>
  );
}
