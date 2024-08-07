import Header from "../../Header";
import Sidebar from "../../Sidebar";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="flex flex-wrap h-[100vh] pt-[120px]">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5 px-[30px] h-[100%] overflow-auto pb-[10px]">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;