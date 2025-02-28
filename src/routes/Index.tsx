import { Lobby } from "@/pages/lobby/index"
import { Route, Routes } from "react-router-dom"

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path="/" element={<Lobby />}/>
    </Routes>
  )
}

export default RoutesIndex