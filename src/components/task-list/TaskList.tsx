import { TaskItem } from "../task-item/TaskItem";

export const TaskList = (
    { tasks, onComplete, onDelete }:
    { tasks: any, onComplete: (id: number, isCompleted: boolean) => void, onDelete: (id: number) => void }
) => {
    return (
        <ol>{tasks?.map((task: any) => (
                <TaskItem key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
            ))}
        </ol>
    );
};