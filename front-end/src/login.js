import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserLogin, UserGet } from './api/user';
import { notification } from "antd";

const Login = () => {
    // const [id, idchange] = useState("");
    // const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    const [storedata, setStore] = useState()
    // const [active, activechange] = useState(true);
    // const [validation, valchange] = useState(false);


    const navigate = useNavigate();
    const GetAll = async () => {
        const response = await UserGet();
        setStore(response.data)
        console.log("zahidhere", response.data)
    }
    useEffect(() => {
        GetAll()
    }, []);
    const handlesubmit = async (e) => {
        e.preventDefault();


          storedata?.find( data=>{
            if(data.email.toString() === email){
                console.log(data)
                ApiCall()
            }
         
        })
     
      
       
    }
    const empdata = { email, password };

    const ApiCall = async() =>{
        console.log("murshad")
        const response = await UserLogin(empdata);
        console.log(response)
        navigate('/employee')
       }
    console.log("storedata", storedata)
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>User Login</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    {/* <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div> */}
                                    {/* 
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div> */}

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>password</label>
                                            <input value={password} onChange={e => passwordchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>

                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Login</button>
                                            <Link to="/Signup" className="btn btn-danger">Signup</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login