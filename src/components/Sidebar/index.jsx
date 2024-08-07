import { useState } from "react";
import { Link } from "react-router-dom";


const SidebarItem = ({ isActive, title,path }) => {
  if (isActive) {
    return (
      <Link to={path}>
        <div className="flex gap-2 p-3 rounded-[10px] text-[#ff6767] bg-white cursor-pointer">
          <i className="w-[25px] h-[25px] bg-[#ff6767]"></i>
          <span>{title}</span>
        </div>
      </Link>
    )
  }

  return (
    <Link to={path}>
      <div className="flex gap-2 p-3 rounded-[10px] text-white cursor-pointer hover:text-[#ff6767] hover:bg-white">
      <i className="w-[25px] h-[25px] bg-white"></i>
      <span>{title}</span>
    </div>
    </Link>
  );
}

const Sidebar = () => {
  const [current,setCurrent] = useState(0);
  function handleActive(index){
    setCurrent(index);
  }
  
  return (
    <div className="sidebar bg-[#FF6767] p-3 rounded-br rounded-tr h-[100%]">
      <div className="flex flex-col relative text-white items-center">
        <img
          className="w-[80px] absolute top-0 left-[50%] translate-y-[-50%] translate-x-[-50%] h-[80px] rounded-[50%] object-cover border-[2px] border-white"
          src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/tpuoaob/2022_05_05/sontungmtp.jpeg.webp"
          alt=""
        />
        <div className="pt-[40px] text-center py-3">
          <h3 className="text-lg font-semibold mt-[10px]">Sơn Tùng M-TP</h3>
          <span>sundargurung360@gmail.com</span>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-3">
          {LISTITEM.map((item,index)=> {
            return (
              <li onClick={()=>handleActive(index)}>
              <SidebarItem title={item.title} path={item.path} isActive={current === index}/>
            </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const LISTITEM = [
  {
    title:"Dashboard",
    path:'/dashboard',
  },
  {
    title:"Vital Task",
    path:'/vital',
  },
  {
    title:"My Tasks",
    path:'/tasks',
  },
  {
    title:"Task Categories",
    path:'/task-categories',
  },
  {
    title:"Settings",
    path:'/settings',
  },
  {
    title:"Help",
    path:'/help',
  },
  {
    title:"Logout",
    path:'/logout',
  },
]

export default Sidebar;
