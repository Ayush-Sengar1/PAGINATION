import React, { useState } from 'react'
import students from '../Api/student.json'


function Table (props) {

    const [page , setPage] = useState(1)
    const [limit , setLimit] = useState(10)
    let array =[];

    for(let i = ((page-1)*limit) ; i < (page*limit) ;i++) {
        array.push(students[i])
    }

    function handlePre () {
        if (page < 2) {
            console.log("kaha gand mai gussega kya av")
        } else if(page <= 6) {
            setPage(page - 1)
        }
    }

    function handleNex () {
        if (page < 6 ) {
            setPage(page + 1)
        } else {
           console.log("60 logo ka hi data hai mere pass") 
        }
    }

  return (
    <div>
        <table>
        <thead>
            <tr className='bg-emerald-600 text-white flex justify-center space-x-32 w-screen py-5 text-2xl font-semibold'>
                <td>ID</td>
                <td>FIRST NAME</td>
                <td>LAST NAME</td>
                <td>GENDER</td>
                <td>EMAIL</td>
            </tr>
        </thead>
        <tbody>
            {array.map (student => (
               <tr className='bg-emerald-200 text-black flex justify-center space-x-16 w-screen' key={student.id}>
               <td className='w-16'>{student.id}</td>
               <td className='w-40'>{student.first_name}</td>
               <td className='w-32'>{student.last_name}</td>
               <td className='w-32'>{student.gender}</td>
               <td className='w-32'>{student.email}</td>
           </tr> 
            ))}
            
        </tbody>
    </table>
    <div className='flex flex-row justify-center space-x-5'>
        <button className='mx-5 w-24 my-10 border-2 border-orange-500 rounded-lg bg-orange-500 text-white' value={page} onClick={handlePre}>PREVIOUS</button>
        <button className='mx-5 w-10 my-10 border-2 border-orange-500 rounded-lg bg-orange-500 text-white' value={page} onClick={()=>setPage(1)}>1</button>
        <button className='mx-5 w-10 my-10 border-2 border-orange-500 rounded-lg bg-orange-500 text-white' value={page} onClick={()=>setPage(2)}>2</button>
        <button className='mx-5 w-10 my-10 border-2 border-orange-500 rounded-lg bg-orange-500 text-white' value={page} onClick={()=>setPage(3)}>3</button>
        <button className='mx-5 w-10 my-10 border-2 border-orange-500 rounded-lg bg-orange-500 text-white' value={page} onClick={()=>setPage(4)}>4</button>
        <button className='mx-5 w-10 my-10 border-2 border-orange-500 rounded-lg bg-orange-500 text-white' value={page} onClick={()=>setPage(5)}>5</button>
        <button className='mx-5 w-10 my-10 border-2 border-orange-500 rounded-lg bg-orange-500 text-white' value={page} onClick={()=>setPage(6)}>6</button>
        <button className='mx-5 w-16 my-10 border-2 border-orange-500 rounded-lg bg-orange-500 text-white' value={page} onClick={handleNex}>NEXT</button>
    </div>
    </div>
  )
}

export default Table
