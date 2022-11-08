import "bootstrap/dist/css/bootstrap.min.css";
import { darkModeContext } from "../App";
import { useContext } from "react";
const Blog = ({ bg, blogheader, blogcontent, blogname, blogpf }) => {
  const { isDarkMode } = useContext(darkModeContext);
  const blogstyle = {
    bg: {
      backgroundColor: isDarkMode ? "black" : "aliceblue",
    },
    header: {
      fontSize: 25,
      marginLeft: 10,
      marginTop: 10,
      color: isDarkMode ? "white" : "black",
    },
    content: {
      marginTop: 10,
      marginLeft: 10,
      width: 300,
      height: 50,
      color: isDarkMode ? "white" : "black",
    },
    name: {
      display: "flex",
      flexDirection: "row",
      marginTop: 12,
      marginLeft: 10,
      color: isDarkMode ? "white" : "black",
    },
    fullname: {
      display: "flex",
      marginTop: 50,
    },
  };
  return (
    <div className="BLOGPOST rounded-5" style={blogstyle.bg}>
      <div className="blogpost rounded-5 m-25">
        <div style={{ display: "flex" }}>
          <img className="bgblog border-top rounded-5" src={bg} alt={bg} />
        </div>
        <div style={blogstyle.header}>{blogheader}</div>
        <div style={blogstyle.content}>{blogcontent}</div>
        <div style={blogstyle.fullname}>
          <img className="blogpf" src={blogpf} alt="" />

          <div style={blogstyle.name}>{blogname}</div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
