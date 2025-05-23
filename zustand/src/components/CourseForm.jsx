import useCourseStore from '../app/courseStore'
import { useState } from 'react'
const CourseForm = () => {
    const addCourse=useCourseStore((state)=>state.addCourse)

    const[coursetitle,setCourseTitle]=useState('dr')
    console.log(addCourse)
    const handelSubmit=(e)=>{
        e.preventDefault()
        addCourse({
            id:Math.ceil(Math.random()*1000),
            title:coursetitle,
            completed:false
        })
        setCourseTitle('')
    }
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="text" value={coursetitle} onChange={(e)=>setCourseTitle(e.target.value)} />
            <button type='submit'>Add Course</button>
        </form>
        <h1>{coursetitle}</h1>
    </div>
  )
}

export default CourseForm