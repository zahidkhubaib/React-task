import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    // const[id,idchange]=useState("");
    // const[name,namechange]=useState("");
    // const[email,emailchange]=useState("");
    // const[phone,phonechange]=useState("");
    // const[active,activechange]=useState(true);
    const [validation, valchange] = useState(false);
    const [categ, setCateg] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [regno, setRegno] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const cardata = { categ, model, color, regno };

        console.log("empdata", cardata)
        fetch("http://localhost:3000/dashboard", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(cardata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/dashboard');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>vehicle Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                       
                                            <select onChange={(e) => {
                                                setCateg(e.target.value);
                                            }} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected>Open this select menu</option>
                                                <option value="Bus">Bus</option>
                                                <option value="Sedan">Sedan</option>
                                                <option value="SUV">SUV</option>
                                                <option value="Hatchback">Hatchback</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mb-3">
                                            <label>Enter Model</label>
                                            <input required value={model} onChange={e => setModel(e.target.value)} className="form-control"></input>
                                            {/* {model.length==0 && validation && <span className="text-danger">Enter the name</span>} */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mb-3">
                                            <label>Enter color</label>
                                            <input required value={color} onChange={e => setColor(e.target.value)} className="form-control"></input>
                                            {/* {model.length==0 && validation && <span className="text-danger">Enter the name</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group mb-3">
                                            <label>Enter Reg-no</label>
                                            <input required value={regno} onChange={e => setRegno(e.target.value)} className="form-control"></input>
                                            {/* {model.length==0 && validation && <span className="text-danger">Enter the name</span>} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">


                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/dashboard" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;