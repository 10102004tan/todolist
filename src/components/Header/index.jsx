const Header = () => {
  return (
    <div className="bg-[#F8F8F8] py-4 shadow mb-[50px]">
      <div className="container flex justify-between flex-wrap items-center">
        <div className="logo w-1/4 flex text-[32px] font-bold">
          <span className="text-[#FF6767]">Dash</span>
          <span className="text-[#000000]">board</span>
        </div>

        <div className="flex w-1/2 items-center shadow justify-between rounded h-[35px] overflow-hidden">
          <input
            className="outline-none bg-[#F5F8FF] p-3 w-[100%]"
            type="text"
            placeholder="Search your task here ..."
          />
          <button className="w-[35px] h-[100%] bg-[#FF6767] rounded"></button>
        </div>
        <div className="flex w-1/4 gap-3 items-center justify-end">
          <div className="flex gap-2">
            <button className="w-[35px] h-[35px] bg-[#FF6767] rounded"></button>
            <button className="w-[35px] h-[35px] bg-[#FF6767] rounded"></button>
          </div>
          <div className="text-[14px]">
            <span className="block font-bold">Tuesday</span>
            <span className="text-[#3ABEFF]">10/10/2004</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
