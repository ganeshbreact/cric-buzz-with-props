function News({p1,imgLink,alink,h1,p2})
{
    return (
        <div style={{
            width: "1000px",
        }} 
        >
            <p>{p1}</p>
            <img src={imgLink} alt="Notfound" />
            <br />
            <a href={alink}>{h1}</a>
            <p>{p2}</p>
        </div>
    );
}

export default News;