import './App.css'

//importo file tasks.js
import tasks from './tasks'


function App() {

  //creo variabile per filtrare "backlog e in_progress"
  const currTask = tasks.filter((task) => {
    if (task.state === 'backlog') {
      return true
    } else if (task.state === 'in_progress') {
      return true
    }
  })

  //creo variabile per numero tasks
  const countTasks = currTask.length

  //creo variabile per filtrare "completed"
  const completedTask = tasks.filter((task) => task.state === 'completed')

  //creo variabile per numero tasks
  const countCompleteTask = completedTask.length

  return (
    <>
      <section>
        <header className='header'>
          <h1 className='title'>Task Manager</h1>
        </header>

        <main>
          <h2 className='subTitle'>Current Tasks ({countTasks})</h2>
          <ul>
            {currTask.map(element => (
              <li key={element.id}>
                <strong>{element.title}</strong><span>{element.state}</span>
                <br />
                Priority: {element.priority}
                <br />
                Est.time: {element.estimatedTime}
              </li>
            ))}
          </ul>

          <hr />

          <h2 className='subTitle'>Completed Tasks ({countCompleteTask})</h2>

          <ul>
            {completedTask.map(element => (
              <li key={element.id}>
                <strong>{element.title}</strong><span>{element.state}</span>
                <br />
                Priority: {element.priority}
                <br />
                Est.time: {element.estimatedTime}
              </li>
            ))}
          </ul>
        </main>
      </section>
    </>
  )
}

export default App

