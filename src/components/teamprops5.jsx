const Teamprops5 = ({
  header5,
  pro5,
  name5,
  nametag5,
  image5,
  content5,
  placeholder,
  type,
}) => {
  return (
    <div>
      <div style={{ height: "150px" }}></div>
      <div>
        <div className="Header5">{header5}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <img
            className="pro5"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
            alt={pro5}
          />
          <p style={{ color: "gray", marginLeft: 30 }}>{name5}</p>
          <p style={{ color: "gray", marginLeft: 30 }}>|</p>
          <p style={{ color: "gray", marginLeft: 30 }}>{nametag5}</p>
        </div>
      </div>
      <div>
        <center>        <img
          style={{ width: "60vw", height: "60vh", marginTop: 50 }}
          src="https://media.istockphoto.com/id/1308964737/photo/business-professionals-applauding-at-a-seminar.jpg?s=612x612&w=0&k=20&c=5K2lx04-jnYq9F__ZB6pci333qhRNzdaTNfsE0V91Xk="
          alt=""
        /></center>
        <center>
          <p className="content5">{content5}</p>
        </center>
      </div>
      <div
        className="Fullname"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          className="pro5"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          alt={pro5}
        />
        <div style={{ flexDirection: "row", marginTop: 50 }}>
          <p>
            Written by
            <p style={{ fontSize: 23 }}>Shedrack Eze</p>
          </p>
          <p style={{ color: "gray" }}>CEO Team app</p>
        </div>
      </div>
      <div className="comments">
        <div style={{ marginBottom: 10, color: "gray", fontSize: 20 }}>
          Join the conversation
        </div>
        <img
          className="pro6"
          src="https://images.unsplash.com/photo-1633367583895-08545d733dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8aDY4dDljT1RMNEV8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=60"
          alt=""
        />
        <input
          className="inputcomment"
          type={type}
          placeholder={placeholder}
        ></input>
      </div>
    </div>
  );
};
export default Teamprops5;
