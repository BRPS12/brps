import { Button } from "react-bootstrap";
const Teamprops2 = ({image2 , header2 , content2 , button2} ) => {
    return ( 
      <div className="props2" style={{display : "flex" , flexDirection:"row"}}>
            <img src={image2} alt="" className="image2" />
            <div className="Textbox2">
            <div className="Garchig2" style={{margin:10}}>{header2}</div>
            <div className="Content2"style={{margin:10}}>{content2}</div>
            <Button className="btn btn-light" style={{ width: 200 ,  margin: 10, color: "Blue", }}>{button2}</Button>
            </div>
            
      </div>

    )
}
export default Teamprops2