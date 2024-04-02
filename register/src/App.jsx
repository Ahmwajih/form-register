import { useState } from 'react'
import Myform from './compoments/Myform'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mytable from './compoments/Mytable';




function App() {
  const [formadd, setFormadd] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zip: '',
    check: false
})
  return (
    <>
      <Myform setFormadd = {setFormadd} formadd = {formadd}/>
      <br/>
      <Mytable {...formadd}/>

    </>
  )
}

export default App
