export const TaskCounter = ({ tasks } : { tasks: any }) => {
    return (
        <div>
            <div>{`Total: ${tasks.length}`}</div>
            <div>{`Completed: ${tasks.filter(({ completed } : { completed: boolean }) => completed).length}`}</div>
        </div>
    );
}