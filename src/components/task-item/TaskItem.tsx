import { Button, Checkbox, Group } from "@mantine/core"

export const TaskItem = ({ task }: { task: any }) => {
    // TODO: Add date formatting
    const date = task.createdAt ? new Date(task.createdAt) : undefined;

    return (
        <li>
            {/* TODO: Add logic for checkbox */}
            <Checkbox checked={task.completed} label="Completed" />
            <div>{task.title}</div>
            <div>{task.priority}</div>
            <div>{`Created: ${date?.toUTCString()}`}</div>
            <Group justify="flex-end" mt="md">
                <Button type="button" color="red">Delete</Button>
            </Group>
        </li>
    );
};