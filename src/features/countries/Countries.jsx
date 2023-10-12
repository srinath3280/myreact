import React from "react";
import {useGetAllCountriesQuery} from '../../services/countries';
import { Link, Outlet } from 'react-router-dom';

function Countries(){
    var {data,isLoading} = useGetAllCountriesQuery();
    console.log(data)
    return (
        <div className="mybox">
            <h1>Countries</h1>
            <div>
                <ul style={{listStyle:"none"}}>
                    {
                        <img src={isLoading && "https://cdn.dribbble.com/users/121337/screenshots/1024835/loading2.gif"} alt="" width="100%"/>
                    }
                    
                    {
                        data && data.map((country)=>{
                            return  (<li>
                                        <Link to={`/CountryDeatils/${country.name.common}`} style={{textDecoration:"none"}}>{country.name.common}</Link>
                                    </li>)
                        })
                    }
                </ul>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
export default Countries