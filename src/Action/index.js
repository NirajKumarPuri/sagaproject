import { REQUEST_API_DATA, RECEIVE_API_DATA,DELETE_API_DATA} from "../Constants/Actiontype";
export const requestapi=()=>{
    return{
        type:REQUEST_API_DATA,
    }
}

export const receiveapi=data=>{
    return{
        type:RECEIVE_API_DATA,
        data:data,
    }
}

export const deleteapidata=item=>{
    return{
        type:DELETE_API_DATA,
        data:item,
    }
}



