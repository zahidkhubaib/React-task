import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { SignupApi} from './api/user';

const Signup = () => {
    // const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [password, passwordchange] = useState("");

    // const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit =async (e) => {
        e.preventDefault();
        const empdata = { email, phone, name,password};

        const response = await SignupApi(empdata);
        console.log("response", response)

    }
    return (


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
                                
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Name</label>
                                <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                            </div>
                        </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
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
                                        <button className="btn btn-success" type="submit">Signup</button>
                                        <Link to="/" className="btn btn-danger">Login</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>

    )
}

export default Signup