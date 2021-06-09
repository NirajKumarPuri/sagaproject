import React from "react";
const Card=({body,title,index,deleteapidata})=>{
    return(
        <div className="content" key={index}>
                    <div className="buttonbox"><button className="button" onClick={()=>deleteapidata(index)}>x</button></div>
                 <div className="title">
                 <p>{title}</p>
                 </div>
                 <div className="body">
                 <p>{body}</p>
                 </div>
                
               
            
             
        </div>
    )
}
export default Card;