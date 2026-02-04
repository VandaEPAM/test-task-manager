import "@mantine/core/styles.css";
import { Box, Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { TaskForm } from './components/task-form';
import { TaskList } from "./components/task-list";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container strategy="grid" size='md' bg='var(--mantine-color-blue-light)'>
        <Box><TaskForm /></Box>
        <Box><TaskList /></Box>
      </Container>
    </MantineProvider>
  );
}
