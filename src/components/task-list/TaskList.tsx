import { TaskItem } from "../task-item/TaskItem";

export const TaskList = ({ tasks, onComplete }: { tasks: any, onComplete: (id: number, isCompleted: boolean) => void }) => {
    return (
        <ol>{tasks?.map((task: any) => <TaskItem key={task.id} task={task} onComplete={onComplete} />)}</ol>
    );
};