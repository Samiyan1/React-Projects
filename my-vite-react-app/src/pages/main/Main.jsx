//import { useState } from 'react'
import './main.css'
import pic from './pic.svg'
import Button from "../../components/Button";
function Main() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={pic}/>
        <Button className={'size-md'} content='Get Started'></Button>
      </div>
    </>
  )
}

export default Main
