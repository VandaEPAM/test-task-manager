import { Button, Checkbox, Group } from "@mantine/core"

export const TaskItem = ({ task, onComplete }: { task: any, onComplete: (id: number, isCompleted: boolean) => void }) => {
    // TODO: Add date formatting
    const date = task.createdAt ? new Date(task.createdAt) : undefined;

    const toggleComplete = (event: any) => {
        onComplete(task.id, event.currentTarget.checked);
    };

    return (
        <li>
            {/* TODO: Add logic for checkbox */}
            <Checkbox checked={task.completed} label="Completed" onChange={toggleComplete} />
            <div>{task.title}</div>
            <div>{task.priority}</div>
            <div>{`Created: ${date?.toUTCString()}`}</div>
            <Group justify="flex-end" mt="md">
                <Button type="button" color="red">Delete</Button>
            </Group>
        </li>
    );
};