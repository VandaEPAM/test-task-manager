import { Button, Group, Modal } from "@mantine/core"

export const DeleteTaskModal = (
    { isOpened, onClose, onCancel, onConfirm }:
    { isOpened: boolean, onClose: () => void, onCancel: () => void, onConfirm: () => void }
) => {
    return <Modal opened={isOpened} title="Are you sure you want to delete the task?" onClose={onClose}>
        <Group mt="lg" justify="flex-end">
            <Button onClick={onCancel} variant="default">
                Cancel
            </Button>
            <Button onClick={onConfirm} color="red">
                Confirm
            </Button>
        </Group>
    </Modal>
}