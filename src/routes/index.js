import { DefaultLayout } from "../components/Layout";
import TaskDetail from "../pages/TaskDetail";
import Home from '../pages/Home'
import Task from '../pages/Task'

export const privateRoutes = [
    {
        path: "/dashboard", component: Home, layout: DefaultLayout,
    },
    {
        path: "/tasks", component: Task, layout: DefaultLayout,
    },
    {
        path: "/tasks/:id", component: TaskDetail, layout: DefaultLayout,
    },
];