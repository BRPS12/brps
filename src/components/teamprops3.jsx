import { Button } from "react-bootstrap";
const Teamprops3 = ({image3 , header3 , content3 , button3  , title2} ) => {
    return (
        <div>
        <div className="props3" style={{display : "flex" , flexDirection:"row"}}>
            <div className="Textbox3">
            <div className="Garchig3" style={{margin:10}}>{header3}</div>
            <div className="Content3"style={{margin:10}}>{content3}</div>
            <Button className="btn btn-light" style={{ width: 200 ,  margin: 10, color: "Blue", }}>{button3}</Button>
            </div>
            
            <img src={image3} alt="" className="image3" />
           
            
            
            </div>
            <center><div className="title2">{title2}</div></center>
            </div>
            
    )
}
export default Teamprops3