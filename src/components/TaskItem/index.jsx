import { Link } from "react-router-dom";

function ItemCircleStatus({ percent }) {
  if (percent >= 20 && percent < 50) {
    return <div className="w-[20px] h-[20px] rounded-[50%] border-[3px] border-[#0225FF]"></div>;
  }
  else if (percent >= 50) {
    return <div className="w-[20px] h-[20px] rounded-[50%] border-[3px] border-[#05A301]"></div>;
  }
  return <div className="w-[20px] h-[20px] rounded-[50%] border-[3px] border-[#F21E1E]"></div>;
}

const TaskItem = ({ task }) => {


  let statusPercent = <span className="text-[#F21E1E]">Not Started</span>;
  if (task.percent >= 20 && task.percent < 50) {
    statusPercent = <span className="text-[#0225FF]">In Progress</span>;
  }


  return (
    <div className="p-2 gap-1 flex flex-nowrap rounded-[15px] border-[2px] border-[#A1A3AB] mb-2">
      <div className="w-1/12">
        <ItemCircleStatus percent={task.percent} />
      </div>
      <div className="w-10/12">
        <Link to={task.path}>
        <h5 className="text-[16px] font-semibold">
          {task.title}
        </h5>
        </Link>
        <div className="flex flex-nowrap gap-2 mb-5">
          <div className="w-8/12 text-[14px] text-[#747474]">
            <p>
             {task.description}
            </p>

            {task.percent >= 50 ?  <div>
              <div className="text-[10px] mt-4 font-semibold">
                <span className="block text-[#000]">Status: <span className="text-[#05A301]">Completed</span>;</span>
                <span className="text-[#747474]">Completed 2 days ago.</span>
              </div>
              </div> : null}
          </div>
          <div className="w-4/12">
            <img
              className="h-[88px] w-[88px] ms-auto object-cover rounded-[10px]"
              src={task.image} alt={task.title}
            />
          </div>
        </div>
        <div>
          {task.percent < 50 ? <ul className="flex justify-between text-[10px]">
            <li>
              <span>
                Priority: <span className="text-[#42ADE2]">{task.priority}</span>
              </span>
            </li>
            <li>
              <span>
                Status: {statusPercent}
              </span>
            </li>
            <li>
              <span className="text-[#A1A3AB]">
                Created on: <span>{task.createdAt}</span>
              </span>
            </li>
          </ul> : null}
        </div>
      </div>
      <div className="w-1/12">...</div>
    
    </div>
  );
};

export default TaskItem;
