import Chat from "./components/chat/chat"
import Detail from "./components/details/details"
import List from "./components/list/list"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App