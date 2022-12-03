import React, { useState, useEffect } from 'react'
import { Link, useNavigate, Navigate } from "react-router-dom";
import { UserLogin, UserGet } from '../../api/user';
import { notification } from "antd";


const Login = () => {
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    const [call, setCall] = useState(false)
    const [isUserLogin, setIsUserLogin] = useState(false);

    const [storedata, setStore] = useState()
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
        storedata?.find(data => {
            if (data.email.toString() === email) {
                console.log(data)
                ApiCall()
            }
            else {
                setIsUserLogin(true)
            }
        })
    }
    const empdata = { email, password };
    const ApiCall = async () => {
        console.log("murshad")
        const response = await UserLogin(empdata);

        setCall(true)

        console.log(response)
        navigate('/dashboard')
    }
    console.log("storedata", isUserLogin)
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

                                    <div className="col-lg-12 mb-3" >
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group ">
                                            <label>password</label>
                                            <input value={password} onChange={e => passwordchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    {isUserLogin && <span>Incorrect user name or password</span>}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit" >
                                                {call && call ? <Navigate to="/dashboard" /> : ""}
                                                Login</button>
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