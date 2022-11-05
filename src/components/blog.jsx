import "bootstrap/dist/css/bootstrap.min.css";
const Blog = ({ bg, blogheader, blogcontent, blogname }) => {
  const blogstyle = {
    header: {
      fontSize: 30,
      marginLeft: 10,
      marginTop: 10,
    },
    content: {
      marginTop: 10,
      marginLeft: 10,
    },
    name: {
      display: "flex",
      flexDirection: "row",
      marginTop: 12,
      marginLeft: 10,
    },
    fullname: {
      display: "flex",
      marginTop: 40,
    },
  };
  return (
    <div className="blogpost rounded-5">
      <div style={{ display: "flex" }}>
        <img className="bgblog border-top rounded-5" src={bg} alt={bg} />
      </div>
      <div style={blogstyle.header}>{blogheader}</div>
      <div style={blogstyle.content}>{blogcontent}</div>
      <div style={blogstyle.fullname}>
        <img className="blogpf" />
        <div style={blogstyle.name}>{blogname}</div>
      </div>
    </div>
  );
};
export default Blog;
