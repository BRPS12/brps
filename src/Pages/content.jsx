import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const Content = ({title, text, placeholder, button, type}) => {
    const [isDisable , setIsDisable] = useState(true)
    return(
        <div className="content">
            <div className="title">{title}</div>
            <div className="text">{text}</div>
            <div className="inputContainer">
                <input type={type} className="input" placeholder={placeholder}/>
                <button className="button">{button}</button>
            </div>
            <div>
      <Button onClick={() =>setIsDisable(true) } variant="primary" >Disable</Button>{' '}
      <Button  onClick={() =>setIsDisable(false) } variant="secondary" >Enable</Button>{' '}
      <Button disabled={isDisable}variant="success">Success</Button>
      
    </div>
        </div>
    )

}

export default Content