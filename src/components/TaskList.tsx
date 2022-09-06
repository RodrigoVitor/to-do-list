import { Task } from "../types/Task"

type Props = {
    tasks: Task[],
    removeTask: (id: string) => void
}

export const TaskList = ({tasks, removeTask}: Props) => {
    return (
        <div className="mt-4 border-2">
            <p className=" bg-blue-700 text-center  p-2 text-[#fff]">Minha Lista</p>
            {tasks.length > 0 &&
                tasks.map((item) => (
                    <div className="border-b-2 flex justify-around items-center">
                        <p className="mt-5 mb-5 font-bold">
                           {item.value}
                        </p>
                        <button 
                            className="bg-red-500 hover:bg-red-400 p-2 rounded-md text-[#fff]"
                            onClick={() => removeTask(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))               
            }
        </div>
    )
}