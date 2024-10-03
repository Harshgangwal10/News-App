import { useEffect, useState } from "react";
import Card from "../componants/Card"
const NewsApp =() =>{
  const [Search,setSearch]=useState("india");
  const[newsdata,setnewsdata]=useState(null)
  const API_KEY="12da298df6774709811e15aecda20a62";

 const getdata= async()=>{
  const response = await fetch(`https://newsapi.org/v2/everything?q=${Search}&apiKey=${API_KEY}`);
  const jsonData=  await response.json();
  console.log(jsonData.articles);
  setnewsdata(jsonData.articles)
 } 
 const handleinput =(e)=>{
  setSearch(e.target.value);
  console.log(e.target)
 }
 
 useEffect(()=>{
  if(Search){
  getdata();
 
  }

  },[Search])
  

 return (
  <div>
    <nav>
      <div>
      <h1>JustConnect</h1>
      </div>
      <div>
        <input type="text" placeholder="Search News"  onChange={handleinput}/>
      </div>
    </nav>
    

    <div className="categorybtn">
     
      
    
        <button className="nav-link" onClick={() => setSearch("technology")}>Technology</button>
        <button className="nav-link" onClick={() => setSearch("sports")}>Sports</button>
        <button className="nav-link" onClick={() => setSearch("business")}>Business</button>
        <button className="nav-link" onClick={() => setSearch("health")}>Health</button>
        <button className="nav-link" onClick={() => setSearch("science")}>Science</button>
        <button className="nav-link" onClick={() => setSearch("entertainment")}>Entertainment</button>
    </div>
    <div>
      <p  className="head">Stay Update With JustConnect </p>
    </div>
    <div>
      {newsdata?<Card data={newsdata}></Card> :null}
    </div>
    </div>
    

 )
}
export  default NewsApp