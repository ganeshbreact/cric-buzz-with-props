function CricBuzz({p1,imgLink,p2,h2,a})
{
    return(

        <div className="MainDiv"
        style={{
            width:"100vw",
            // height:"100vh",
            // border:"2px solid black",
            textAlign: "justify",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",

        }}>

        <div className="SecondDiv"
        style={{
            margin:"5px",
            width:"400px",
            border:"2px solid black",
            display:"flex",
            flexDirection:"column"
            
        }}
        >
        <p style={{
            fontSize: "12px",
            color: "#666"
        }}>{p1}</p>

        <img style={{
            width:"400px",
        }}
        src={imgLink} alt="Image Loading" />
        

        <a style={{
            textDecoration: "none",
        }} target="blank"
        href={a}>
            <h2 style={{
                fontSize: "24px",
                color:"black",      
            }}
            >{h2}</h2>
            </a>

        <p>{p2}</p>
       
        </div>
        </div>
        
    );
}

export default CricBuzz;

