import React from 'react'
import { Routes, Route } from "react-router-dom"
import Homepage from '../Pages/Homepage'
import Todo from '../Pages/Todo'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  )
}

export default AllRoutes