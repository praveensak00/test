import React,{useEffect,useState} from "react";
import axios from "axios";
import Test from "./dot";

const Student =()=>{

    const[divi,setDivi]=useState([]);
    useEffect(()=>{
        axios.get('http://www.balldontlie.io/api/v1/players')
        .then(response=>{
const stud =response.data.data;
const studdiv =stud.map(studs=>studs.team.divi);
setDivi(studdiv);

        })
        .catch(error=>{
            console.error('Error fetching student data:',error);
        });
    },[]);
    return(
        <div>
            <h1>Student Division:</h1>
            {divi.length > 0?(
                <u1>
                    {divi.map((divi,index)=>(
                        <li key={index}>divi:{divi}</li>
                    ))}
                </u1>
            ):(
                <Test/>
            )}
        </div>
    );
};

export default Student;