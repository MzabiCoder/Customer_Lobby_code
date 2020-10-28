import {useState,useEffect} from 'react'
import { List } from './components/List' 
import { Count } from './components/Count'
import axios from 'axios'
 
function App() {
  const [counts,setCounts]=useState(0)
  useEffect(() => {
    const fetch = async ()=> {
      const {data} = await axios('https://jsonplaceholder.typicode.com/users')
       setCounts(data.length)
      
    }
    fetch()
}, [])
  return (
    <div className="App">
      <Count counts={counts} />
      <List  />
      
    </div>
  );
}

export default App;
