import "bootstrap/dist/css/bootstrap.min.css";
const Blog = ({ bg, blogheader, blogcontent, blogname, blogpf }) => {
  const blogstyle = {
    header: {
      fontSize: 25,
      marginLeft: 10,
      marginTop: 10,
    },
    content: {
      marginTop: 10,
      marginLeft: 10,
      width:300,
      height:50,
    },
    name: {
      display: "flex",
      flexDirection: "row",
      marginTop: 12,
      marginLeft: 10,
    },
    fullname: {
      display: "flex",
      marginTop: 50,
    },
  };
  return (
    <div className="blogpost rounded-5 m-25" >
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
  );
};
export default Blog;
