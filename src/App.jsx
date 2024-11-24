
import './App.css'
import First from './Components/First'
import { Route,Routes } from 'react-router-dom'
import MealData from './Components/MealData'

function App() {
 
  return (
    <>
    <Routes>
     
     <Route path='/' element={<First/>}/>
     <Route path='/:mealid' element={<MealData/>}/>

     </Routes>
    </>
  )
}

export default App
