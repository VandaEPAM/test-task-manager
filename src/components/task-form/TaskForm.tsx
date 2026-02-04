import { Button, Group, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const TASK_PRIORITY_LIST = ['High', 'Medium', 'Low'];

export const TaskForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            title: '',
            priority: '',
        },
        // TODO: check how to validate properly
        validate: {
            title: (value) => (value.length < 5 ? 'Title must have at least 5 letters' : null),
            priority: (value) => (TASK_PRIORITY_LIST.includes(value) ? null : 'Priority should be choosen'),
        },
    });

    return (
        // TODO: reset form after submit
        <form onSubmit={form.onSubmit(onSubmit)}>
            <TextInput
                required
                withAsterisk
                label="Title"
                placeholder="Give a name to your task..."
                key={form.key('title')}
                {...form.getInputProps('title')}
            />

            <Select
                required
                label="Choose the task priority"
                placeholder="Pick value"
                key={form.key('priority')}
                data={TASK_PRIORITY_LIST}
                {...form.getInputProps('priority')}
            />

            <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    );
};