import TaskItem from '../../components/TaskItem'
import Overlay from '../../components/Overlay'
import { useState } from 'react'


const FormAddTask = ({onAddTask}) => {
    return (
        <div>
            <Overlay>
                <div className='flex justify-between items-center'>
                    <h5>Edit Task</h5>
                    <button className='pb-1 border-black border-b-[2px]' onClick={onAddTask}>Go back</button>
                </div>
                <div className='mt-5 mb-4 p-4 border-[2px]'>
                    <div className='mb-3'>
                        <label className='font-semibold' for="title">Title</label>
                        <br />
                        <input className='outline-none rounded border-[2px] mt-2 py-1 px-2' id="title" type='text' />
                    </div>
                    <div className='mb-3'>
                        <label className='font-semibold' for="date">Date</label>
                        <br />
                        <input className='outline-none rounded border-[2px] mt-2 py-1 px-2' id="date" type='date' />
                    </div>

                    <div className='mb-3'>
                        <span className='font-semibold' >Priority</span>
                        <br />
                        <div className='flex gap-2'>
                            {
                                PRIORITIES.map((priority, index) => {
                                    return <div className='flex items-center gap-2'>
                                        <label>{priority.title}</label>
                                        <input type="checkbox" />
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className='mb-3 flex flex-nowrap gap-5'>
                        <div className='w-2/3'>
                            <label className='font-semibold' >Task Description</label>
                            <br />
                            <textarea rows={6} className='w-[100%] outline-none border-[2px] rounded p-2' placeholder='Start writing here.....'></textarea>
                        </div>
                        <div className='w-1/3 relative'>
                            <label className='font-semibold' >Upload Image</label>
                            <br />
                            <div className='border-[2px] rounded-[15px] w-[100%] flex flex-col items-center p-4 gap-2'>
                                <div className='w-[60px] h-[60px] border-[2px] cursor-pointer'>

                                </div>

                                <span>Drag&Drop files here</span>
                                <button className='py-1 px-3 rounded border-[2px]'>
                                    Browse
                                </button>
                            </div>
                            <input type='file' className='absolute opacity-0 invisible'/>
                        </div>
                    </div>
                </div>
                <button className='px-5 py-1 mb-3 rounded bg-[#F24E1E] text-white font-semibold text-[14px]'>Done</button>
            </Overlay>
        </div>
    )
}

const TaskPage = () => {
    const [isAddTask,setIsAddTask] = useState(false);
    return (
        <div className="grid grid-cols-2 gap-5 h-[100%] px-[60px]">
            <div className="border-[#A1A3AB] border-[2px] rounded-[15px] px-[30px] py-[20px]">
                <h5 className='text-[16px] font-semibold pb-2 relative after:content-[ ] after:bottom-0 after:left-0 after:absolute after:w-[50%] after:2px after:bg-red-500'>My Tasks</h5>
                <button onClick={()=>setIsAddTask(true)} className='px-5 py-1 mb-3 rounded bg-[#F24E1E] text-white font-semibold text-[14px]'>Add Task</button>
                <div>
                    {
                        LISTTASK.map((task, index) => {
                            return <TaskItem task={task} key={index} />
                        })
                    }
                </div>
            </div>

            <div className="border-[#A1A3AB] border-[2px] rounded-[15px] px-[20px] py-[20px]">
                <div className='flex gap-5 items-end'>
                    <img className='w-[158px] h-[158px] rounded-[15px] object-cover' src={TASK.image} alt={TASK.title} />
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-[16px]'>Submit Documents</h5>
                        <span>Priority: <span>Extreme</span></span>
                        <span>Status: <span>Not Started</span></span>
                        <span>Created on: <span>20/06/2023</span></span>
                    </div>
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
            {
                isAddTask? <FormAddTask onAddTask={()=>setIsAddTask(false)}></FormAddTask> : null
            }
        </div>


    )
};

const PRIORITIES = [
    {
        color: "",
        title: "Extreme",
    },
    {
        color: "",
        title: "Moderate",
    },
    {
        color: "",
        title: "Low",
    },
];

const TASK = {
    title: "Submit Documents",
    description: "Make sure to submit all the necessary docum.....",
    percent: 70,
    createdAt: "10/10/2024",
    priority: "Moderate",
    image: "https://yt3.googleusercontent.com/ux6IbjY66j8gr8n-71aY9hwR1OGPmxweHWEYsDr-RxX_VbX1cZoReGi1JyKN-fDJ7h-Mqqn_Gw=s900-c-k-c0x00ffffff-no-rj",
};

const LISTTASK = [
    {
        title: "Submit Documents",
        description: "Make sure to submit all the necessary docum.....",
        percent: 70,
        createdAt: "10/10/2024",
        priority: "Moderate",
        image: "https://yt3.googleusercontent.com/ux6IbjY66j8gr8n-71aY9hwR1OGPmxweHWEYsDr-RxX_VbX1cZoReGi1JyKN-fDJ7h-Mqqn_Gw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "Submit Documents",
        description: "Make sure to submit all the necessary docum.....",
        percent: 70,
        createdAt: "10/10/2024",
        priority: "Moderate",
        image: "https://yt3.googleusercontent.com/ux6IbjY66j8gr8n-71aY9hwR1OGPmxweHWEYsDr-RxX_VbX1cZoReGi1JyKN-fDJ7h-Mqqn_Gw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        title: "Submit Documents",
        description: "Make sure to submit all the necessary docum.....",
        percent: 70,
        createdAt: "10/10/2024",
        priority: "Moderate",
        image: "https://yt3.googleusercontent.com/ux6IbjY66j8gr8n-71aY9hwR1OGPmxweHWEYsDr-RxX_VbX1cZoReGi1JyKN-fDJ7h-Mqqn_Gw=s900-c-k-c0x00ffffff-no-rj",
    },
];
export default TaskPage;