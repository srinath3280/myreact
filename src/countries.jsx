import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Countrydetails from './countrydetails';

function Countries(){
    var [Ctry,setCtry] = useState([]);
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
            setCtry([...res.data]);
            console.log(res.data)

        })
    },[])
    return (
        <div className="mybox">
            <h1>Countries</h1>
            <div id="block">
                <ul>
                    {
                        Ctry.length > 0 && Ctry.map((country,i)=>{
                            return (
                                <div id="block1">
                                    <li>
                                        <h4>{country.name.common}</h4>
                                        <img src={country.flags[0]} alt=""/>
                                        <Link to={"/countydetails"}>Read more</Link>
                                    </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Countries