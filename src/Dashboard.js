import React,{useEffect} from "react";
import { connect } from "react-redux";
import { requestapi } from "./Action/index";
import { bindActionCreators } from "redux";
import { deleteapidata } from "./Action/index";
import Card from "./Component/Card/index";
import './styles.css';
const Dashboard=(props)=>{

useEffect(()=>{
    props.requestapi();
},[])
    return(
        <div className="container">
            {props.Data.map((item,index)=>{
                return <Card key={index} body={item.body} title={item.title} index={index} deleteapidata={props.deleteapidata}/>
               
            })}
             
        </div>
    )
        }

const mapStateToProps=(store)=>{
return{
    Data:store.dataarray
}
}
const mapDispatchToProps=(dispatch)=>
    bindActionCreators(
    {
        requestapi,deleteapidata
    },dispatch
);


export default connect(mapStateToProps,mapDispatchToProps) (Dashboard);