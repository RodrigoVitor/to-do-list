import { AddTask } from "./components/AddTask"
import { TaskList } from "./components/TaskList"
import './App.css'
import { useTaskList } from "./hooks/TaskList"
import { Footer } from "./components/Footer"

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

  const handleRemoveTask = (id: string) => {
    dispatch({
      type: 'DEL',
      payload: {
        id
      }
    })
  }

  const handleRemoveAll = () => {
    dispatch({
      type: 'DELALL'
    })
  }

  return (
    <div className="p-5 relative ">
      <header className="bg-green-300 flex justify-center p-2 mt-3">
        <h1 className="text-3xl font-bold text-[#fff]">Todo List</h1>
      </header>
      
      <main className="lg:flex lg:justify-between min-h-[70vh]">
        <AddTask actionAddTask={handleAddTask} actionRemoveAll={handleRemoveAll} />
        <section className="lg:w-3/6">
          <TaskList tasks={taskReducer} removeTask={handleRemoveTask}/>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App