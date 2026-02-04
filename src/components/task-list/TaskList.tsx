import { TaskItem } from "../task-item/TaskItem";

export const TaskList = ({ tasks }: any) => {
    return (
        <ol>{tasks?.map((task: any) => <TaskItem key={task.id} task={task} />)}</ol>
    );
};