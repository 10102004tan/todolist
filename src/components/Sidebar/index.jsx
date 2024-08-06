const Sidebar = () => {
  return (
    <div className="sidebar bg-[#FF6767] p-3 rounded-br rounded-tr">
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
          <li>
            <div className="flex gap-2 p-3 rounded-[10px] text-[#ff6767] bg-white">
              <i className="w-[25px] h-[25px] bg-[#ff6767]"></i>
              <span>Dashboard</span>
            </div>
          </li>
          <li>
            <div className="flex gap-2 p-3 rounded-[10px] text-white hover:text-[#ff6767] hover:bg-white">
              <i className="w-[25px] h-[25px] bg-white"></i>
              <span>Vital Task</span>
            </div>
          </li>
          <li>
            <div className="flex gap-2 p-3 rounded-[10px] text-white hover:text-[#ff6767] hover:bg-white">
              <i className="w-[25px] h-[25px] bg-white"></i>
              <span>My Task</span>
            </div>
          </li>
          <li>
            <div className="flex gap-2 p-3 rounded-[10px] text-white hover:text-[#ff6767] hover:bg-white">
              <i className="w-[25px] h-[25px] bg-white"></i>
              <span>Task Categories</span>
            </div>
          </li>
          <li>
            <div className="flex gap-2 p-3 rounded-[10px] text-white hover:text-[#ff6767] hover:bg-white">
              <i className="w-[25px] h-[25px] bg-white"></i>
              <span>Settings</span>
            </div>
          </li>
          <li>
            <div className="flex gap-2 p-3 rounded-[10px] text-white hover:text-[#ff6767] hover:bg-white">
              <i className="w-[25px] h-[25px] bg-white"></i>
              <span>Help</span>
            </div>
          </li>
          <li>
            <div className="flex gap-2 p-3 rounded-[10px] text-white hover:text-[#ff6767] hover:bg-white">
              <i className="w-[25px] h-[25px] bg-white"></i>
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
