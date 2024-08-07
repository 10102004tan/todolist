
import TaskItem from '../../components/TaskItem';
import TaskStatusItem from '../../components/TaskStatusItem';

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[35px]">Welcome back, Sundar</h1>
        <div className="flex gap-4 mb-5">
          <div className="member-list flex gap-2">
            <a href="#" className="member-item">
              <div className="w-[35px] h-[35px] overflow-hidden rounded">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCJBtpY1tg77wvqWOjfymU1pZ-gwbCxNYJA&s"
                />
              </div>
            </a>
            <a href="#" className="member-item">
              <div className="w-[35px] h-[35px] overflow-hidden rounded">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCJBtpY1tg77wvqWOjfymU1pZ-gwbCxNYJA&s"
                />
              </div>
            </a>
            <a href="#" className="member-item">
              <div className="w-[35px] h-[35px] overflow-hidden rounded">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCJBtpY1tg77wvqWOjfymU1pZ-gwbCxNYJA&s"
                />
              </div>
            </a>
            <a href="#" className="member-item">
              <div className="w-[35px] h-[35px] overflow-hidden rounded">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCJBtpY1tg77wvqWOjfymU1pZ-gwbCxNYJA&s"
                />
              </div>
            </a>
            <a href="#" className="member-item">
              <div className="w-[35px] h-[35px] overflow-hidden rounded">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCJBtpY1tg77wvqWOjfymU1pZ-gwbCxNYJA&s"
                />
                <span>+4</span>
              </div>
            </a>
          </div>
          <button className="flex items-center gap-1 border-[#FF6767] border-[2px] rounded h-[35px] text-center p-2">
            <i className="w-[20px] h-[20px] bg-black"></i>
            <span>Invite</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 p-3 gap-3 border-[#A1A3AB] border-[2px]">
        <div className="px-[40px] py-3 border-[2px] rounded-[10px] shadow-[#eee]">
          <div className="flex justify-between items-center mb-4">
            <button className="flex items-center gap-1">
              <i className="w-[20px] h-[20px] bg-black"></i>
              <span className="text-[#ff6767]">To do</span>
            </button>
            <button className="flex items-center gap-1">
              <i className="w-[20px] h-[20px] bg-[#ff6767]"></i>
              <span className="text-[#A1A3AB]">Add task</span>
            </button>
          </div>
          <div>
            <div className="text-[16px] mb-3">
              <span>20 June</span>
              <span className="text-[#A1A3AB] ml-2">Today</span>
            </div>
            <div>
              {
                LISTTASK.map((task, index) => {
                  return <TaskItem task={task} key={index} />
                })
              }
            </div>
          </div>

        </div>
        <div className="grid grid-rows-3 gap-3">
          <div className="row-span-1 px-3 py-2 border-[2px] rounded-[10px] shadow-[#eee]">
            <button className="flex items-center gap-1">
              <i className="w-[20px] h-[20px] bg-black"></i>
              <span className="text-[#ff6767]">Task Status</span>
            </button>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <TaskStatusItem percent={80} />
              <TaskStatusItem percent={46} />
              <TaskStatusItem percent={13} />
            </div>
          </div>
          <div className="row-span-2 px-3 py-2 border-[2px] rounded-[10px] shadow-[#eee]">
            <button className="flex items-center gap-1">
              <i className="w-[20px] h-[20px] bg-black"></i>
              <span className="text-[#ff6767]">Completed Task</span>
            </button>
            <div className="mt-3">
              {
                LISTTASK.map((task, index) => {
                  return <TaskItem task={task} key={index} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LISTTASK = [
  {
    title: "Submit Documents",
    description: "Make sure to submit all the necessary docum.....",
    percent: 70,
    path:"/tasks/1",
    createdAt: "10/10/2024",
    priority: "Moderate",
    image: "https://yt3.googleusercontent.com/ux6IbjY66j8gr8n-71aY9hwR1OGPmxweHWEYsDr-RxX_VbX1cZoReGi1JyKN-fDJ7h-Mqqn_Gw=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "Submit Documents",
    description: "Make sure to submit all the necessary docum.....",
    percent: 70,
    path:"/tasks/1",
    createdAt: "10/10/2024",
    priority: "Moderate",
    image: "https://yt3.googleusercontent.com/ux6IbjY66j8gr8n-71aY9hwR1OGPmxweHWEYsDr-RxX_VbX1cZoReGi1JyKN-fDJ7h-Mqqn_Gw=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "Submit Documents",
    description: "Make sure to submit all the necessary docum.....",
    percent: 70,
    path:"/tasks/1",
    createdAt: "10/10/2024",
    priority: "Moderate",
    image: "https://yt3.googleusercontent.com/ux6IbjY66j8gr8n-71aY9hwR1OGPmxweHWEYsDr-RxX_VbX1cZoReGi1JyKN-fDJ7h-Mqqn_Gw=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "Submit Documents",
    description: "Make sure to submit all the necessary docum.....",
    percent: 70,
    path:"/tasks/1",
    createdAt: "10/10/2024",
    priority: "Moderate",
    image: "https://yt3.googleusercontent.com/ux6IbjY66j8gr8n-71aY9hwR1OGPmxweHWEYsDr-RxX_VbX1cZoReGi1JyKN-fDJ7h-Mqqn_Gw=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    title: "Submit Documents",
    description: "Make sure to submit all the necessary docum.....",
    percent: 70,
    path:"/tasks/1",
    createdAt: "10/10/2024",
    priority: "Moderate",
    image: "https://yt3.googleusercontent.com/ux6IbjY66j8gr8n-71aY9hwR1OGPmxweHWEYsDr-RxX_VbX1cZoReGi1JyKN-fDJ7h-Mqqn_Gw=s900-c-k-c0x00ffffff-no-rj",
  },
]

export default HomePage;
