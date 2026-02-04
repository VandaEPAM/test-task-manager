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

export default function App() {
  const [tasks, setTasks] = useState<any[]>([]);

  const handleSubmitTask = (values: any) => {
    setTasks((prev) => [...prev, toTask(values) ])
  };

  return (
    <MantineProvider theme={theme}>
      <Container strategy="grid" size='md' bg='var(--mantine-color-blue-light)'>
        <Box><TaskForm onSubmit={handleSubmitTask} /></Box>
        <Box><TaskCounter tasks={tasks} /></Box>
        <Box><TaskList tasks={tasks} /></Box>
      </Container>
    </MantineProvider>
  );
}
