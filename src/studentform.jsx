import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function StudentForm(){
    var [students,setStudents] = React.useState([]);
    var studentform = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            gender:'',
            age:'',
            username:'',
            password:''
        },
        validationSchema:Yup.object({
            firstname:Yup.string().required("Firstname required"),
            lastname:Yup.string().required("Lastname required"),
            password:Yup.string().required("Password required").matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"Please enter correct formate"),
            age:Yup.string().required("Age must be required").test({
                name:'GenderBasedAgeValidation',
                message:'Male & Female age must be greaterthan 21 & 18',
                test:(value,a)=>{
                    if(a.parent.gender==="male" && value<21){
                        return false;
                    }
                    if(a.parent.gender==="female" && value<18){
                        return false;
                    }
                    return true
                }
            }),
            username:Yup.string().required("Username must be required").test({
                name:'UserNameValidation',
                message:'Already exist',
                test:(async (value,a)=>{
                    var res = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${value}`);
                    if(res.data.length !== 0){
                        return false
                    }
                    else{
                        return true
                    }
                })
            })
        }),
        onSubmit:(values)=>{
            setStudents([...students,values]);
        }
    })
    return (
        <div className="box1">
            <h1>Student Form</h1>
            <form onSubmit={studentform.handleSubmit}>
                <input placeholder="firstname" type="text" name="firstname" onBlur={studentform.handleBlur} onChange={studentform.handleChange}/><br />
                <div>
                    <b>{studentform.touched.firstname && studentform.errors.firstname}</b>
                </div>
                <input placeholder="lastname" type="text" name="lastname" onBlur={studentform.handleBlur} onChange={studentform.handleChange} /><br />
                <div>
                    <b>{studentform.touched.lastname && studentform.errors.lastname}</b>
                </div>
                <input type="radio" name="gender" value="male" onBlur={studentform.handleBlur} onChange={studentform.handleChange}/>:Male
                <input type="radio" name="gender" value="female" onBlur={studentform.handleBlur} onChange={studentform.handleChange}/>:Female
                <br />
                <input placeholder="age" type="text" name="age" onBlur={studentform.handleBlur} onChange={studentform.handleChange} /><br />
                <div>
                    <b>{studentform.touched.age && studentform.errors.age}</b>
                </div>
                <input placeholder="username" type="text" name="username" onBlur={studentform.handleBlur} onChange={studentform.handleChange} /><br />
                <div>
                    <b>{studentform.touched.username && studentform.errors.username}</b>
                </div>
                <input placeholder="password" type="text" name="password" onBlur={studentform.handleBlur} onChange={studentform.handleChange} /><br />
                <div>
                    <b>{studentform.touched.password && studentform.errors.password}</b>
                </div>
                <button>Submit</button>
            </form>
            <br />
            <br />
            <table border="1px solid red" cellSpacing="0">
                <thead>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Gender</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    {
                        students.map((student)=>{
                            return (
                            <tr className="tr" >
                                <td>{student.firstname}</td>
                                <td>{student.lastname}</td>
                                <td>{student.gender}</td>
                                <td>{student.age}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StudentForm;