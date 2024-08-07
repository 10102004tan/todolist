const Overlay = ({children}) => {
    return (
        <div className="w-[100vw] h-[100vh] fixed z-50">
            <div className="w-[100vw] h-[100vh] fixed  bg-black top-0 left-0 right-0 opacity-50">
            </div>
            <div className="overlay-content fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[600px] rounded-[15px] overflow-y-auto overflow-x-hidden bg-white z-[100] px-[50px] py-[40px]">
                {children}
            </div>
        </div>
    )
};

export default Overlay;