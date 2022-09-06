import { AddTask } from "./components/AddTask"
import { TaskList } from "./components/TaskList"
import './App.css'
import { useTaskList } from "./hooks/TaskList"

const App = () => {
  const [taskReducer, dispatch] = useTaskList()

  const handleAddTask = (value: string) => {
    dispatch({
        type: 'ADD',
        payload: {
            value: value
        }
    })
  }

  return (
    <div className="p-5">
      <header className="bg-green-300 flex justify-center p-2 mt-3">
        <h1 className="text-3xl font-bold">Todo List</h1>
      </header>
      
      <main className="lg:flex lg:justify-between">
        <AddTask actionAddTask={handleAddTask} />
        <section className="lg:w-3/6">
          <TaskList tasks={taskReducer} />
        </section>
      </main>

  
      
    </div>
  )
}

export default App