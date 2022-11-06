import { Button } from "react-bootstrap";
const Teamprops = ({ header, content, button, image1, image2, image3 }) => {
  return (
    <div className="props1" style={{display : "flex" , flexDirection:"row"}}>
      <div className="Textbox">
        <div className="Garchig" style={{ margin: 10 }}>
          {header}
        </div>
        <div className="Content" style={{ margin: 10 }}>
          {content}
        </div>
        <Button className="btn btn-light" style={{ width: 200 ,  margin: 10, color: "Blue", }}>{button}</Button>
        </div>
        <img src={image1} alt="" className="image1" />
    </div>
  );
};
export default Teamprops;
