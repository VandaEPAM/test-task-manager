export const TaskList = ({ tasks }: any) => {
    return (
        <ol>{tasks?.map((task: any) => <li key={task.id}>{task.title}</li>)}</ol>
    );
};