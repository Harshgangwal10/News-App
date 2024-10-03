
const Card =({data}) =>{
  console.log(data);

  
  

  return (
    <div className="cardContainer">
      {data.map((curitem,index)=>{
        if(!curitem.urlToImage){
          return null;
        }else{
          return(
            <div className="card">
              <img  src={curitem.urlToImage}/>
              <div className="content">
                <a className="title" onClick={()=>window.open(curitem.url)}>{curitem.title}</a>
                <p>{curitem.description}</p>
                <button onClick={()=>window.open(curitem.url)}>Read More</button>
              </div>
            </div>
          )
        }
        
      })}
    </div>
  )

}
export default Card