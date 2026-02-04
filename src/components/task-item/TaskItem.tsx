import { Box, Button, Checkbox, Group, Text } from "@mantine/core"

const PRIORITY_COLOR = {
    high: '#dc2626',
    medium: '#ca8a04',
    low: '#16a34a',
};

const TASK_COMPLETION_COLOR = '#6b7280';

export const TaskItem = (
    { task, onComplete, onDelete }:
    { task: any, onComplete: (id: number, isCompleted: boolean) => void, onDelete: (id: number) => void }
) => {
    // TODO: Add date formatting
    const date = task.createdAt ? new Date(task.createdAt) : undefined;

    const toggleComplete = (event: any) => {
        onComplete(task.id, event.currentTarget.checked);
    };

    const handleDelete = () => {
        onDelete(task.id);
    };

    const priorityColor = task.completed
        ? TASK_COMPLETION_COLOR
        : PRIORITY_COLOR[task.priority.toLowerCase() as keyof typeof PRIORITY_COLOR];

    return (
        <Box
            component="li"
            p="8px"
            m="8px"
            bg="#f9fafb"
            bdrs="4px" 
            style={{
                border: `1px solid ${priorityColor}`,
            }}
        >
            <Checkbox checked={task.completed} label="Completed" onChange={toggleComplete} />
            <Box
                m="8px"
                p="8px"
                style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: priorityColor,
                    fontWeight: 400,
                }}
            >
                <Text size="md" fw={700}>{task.title}</Text>
                <Text size="sm">{`Priority: ${task.priority}`}</Text>
                <Text size="sm">{`Created: ${date?.toUTCString()}`}</Text>
            </Box>
            <Group justify="flex-end" mt="md">
                <Button type="button" color="red" onClick={handleDelete}>Delete</Button>
            </Group>
        </Box>
    );
};