import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Item } from './Item'
 

export const List = ({count}) => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        const fetch = async ()=> {
          const {data} = await axios('https://jsonplaceholder.typicode.com/users')
          setData(data)
          setLoading(false)
          console.log(data);
        }
        fetch()
    }, [])
    
    
    return (
        <div>
         {!loading && data && data.map(item => (
          <Item key={item.id} item={item}/>
        ))}
           
        </div>
    )
}
