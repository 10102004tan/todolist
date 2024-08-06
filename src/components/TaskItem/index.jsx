const TaskItem = () => {
  return (
    <div className="p-2 gap-1 flex flex-nowrap rounded-[10px] border-[2px] border-[#A1A3AB] mb-2">
      <div className="w-1/12">
        <div className="w-[20px] h-[20px] rounded-[50%] border-[3px] border-red-600"></div>
      </div>
      <div className="w-10/12">
        <h5 className="text-[24px] font-semibold">
          Attend Nischal’s Birthday Party
        </h5>
        <div className="flex flex-nowrap gap-2 mb-5">
          <p className="w-8/12">
            Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh
            Elements).....
          </p>
          <div className="w-4/12 h-[100px] overflow-hidden rounded-[10px]">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAsi9Sxn47yHxV0PSKcByPz7MvklLRPPxcw&s"
            />
          </div>
        </div>
        <div>
          <ul className="flex justify-between text-[14px]">
            <li>
              <span>
                Priority: <span>Moderate</span>
              </span>
            </li>
            <li>
              <span>
                Status: <span>Not Started</span>
              </span>
            </li>
            <li>
              <span>
                Created on: <span>10/10/2004</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/12">...</div>
    </div>
  );
};

export default TaskItem;
