import { useParams } from "react-router-dom";
import TaskDetail from "../../components/TaskDetail";

const TaskDetalPage = () => {
    const { id } = useParams();
   
    return (
        <TaskDetail id={id} />
    )
};

export default TaskDetalPage;