import { Link } from "react-router-dom";

const TaskDetail = () => {
    return (
        <div className="border-[#A1A3AB] border-[2px] rounded-[15px] px-[20px] py-[20px]">
                <div className='flex gap-5 items-start'>
                    <img className='w-[158px] h-[158px] rounded-[15px] object-cover' src="https://yt3.googleusercontent.com/ux6IbjY66j8gr8n-71aY9hwR1OGPmxweHWEYsDr-RxX_VbX1cZoReGi1JyKN-fDJ7h-Mqqn_Gw=s900-c-k-c0x00ffffff-no-rj" alt="as" />
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-[16px]'>Submit Documents</h5>
                        <span>Priority: <span>Extreme</span></span>
                        <span>Status: <span>Not Started</span></span>
                        <span>Created on: <span>20/06/2023</span></span>
                    </div>
                    <Link to={'/tasks'} className='pb-1 border-black border-b-[2px] ms-auto'>Go back</Link>
                </div>
                <div>
                    <div>Task Title : <h5>Document Submission</h5></div>
                    <div>Objective : <p>To submit required documents for something important</p></div>
                    <div>Task Description:<p>
                        Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.</p></div>
                    <div>
                        Additional Notes:
                        <ul>
                            <li>
                                Ensure that the documents are authentic and up-to-date.
                            </li>
                            <li>
                                Maintain confidentiality and security of sensitive information during the submission process.
                            </li>
                            <li>
                                If there are specific guidelines or deadlines for submission, adhere to them diligently.
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="flex gap-2 justify-end">
                    <button className="w-[35px] h-[35px] bg-[#FF6767] rounded"></button>
                    <button className="w-[35px] h-[35px] bg-[#FF6767] rounded"></button>
                </div>
            </div>
    );
}

export default TaskDetail;