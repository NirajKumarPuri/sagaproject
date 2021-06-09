import { call,put,takeLatest } from "redux-saga/effects";
import { receiveapi } from "../Action/index";
import {REQUEST_API_DATA} from "../Constants/Actiontype";
import { JsonplaceholderApi } from "../Api/index";

function* getapidata(){// generator function
    try{
        const data=yield call( JsonplaceholderApi)//Working saga
        yield put(receiveapi(data));
    }catch(e){
        console.log(e)
    }
}

export default function* mysaga(){
    yield takeLatest(REQUEST_API_DATA,getapidata)//watcher saga
}