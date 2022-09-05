import { AddTask } from "./components/AddTask"
import { TaskList } from "./components/TaskList"
import './App.css'

const App = () => {
  return (
    <div className="p-5">
      <header className="bg-green-300 flex justify-center p-2 mt-3">
        <h1 className="text-3xl font-bold">Todo List</h1>
      </header>
      
      <main className="lg:flex lg:justify-between">
        <AddTask />
        <section className="lg:w-3/6">
          <TaskList />
        </section>
      </main>

  
      
    </div>
  )
}

export default App