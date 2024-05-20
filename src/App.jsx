import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List'
import { details } from './details'

function App() {

  const [data, setData] = useState(details)

  const deleteData = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const clearAll = () => {
    setData(data.filter())
  }

  return (
    <main>
      <section className='container'>
        <h3> {data.length} birthdays today</h3>
        {
          data.map(item => <List item={item} key={item.id} deleteData={deleteData} />)
        }
      </section>
    </main>
  )
}

export default App
