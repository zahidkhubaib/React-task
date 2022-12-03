import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/dashboard/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            // idchange(resp.id);
            setCateg(resp.categ);
            setModel(resp.model);
            setColor(resp.color);
            setRegno(resp.regno);
            // activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

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
        const empdata = { categ, model, color, regno };


        fetch("http://localhost:3000/dashboard/" + empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/em');
        }).catch((err) => {
            console.log(err.message)
        })

    }
    console.log("categ",categ)
    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Edit</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    {/* <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div> */}

                                    {/* <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div> */}
                                    <div className="col-lg-12">
                                        <div className="form-group">

                                            <select  onChange={(e) => {
                                                setCateg(e.target.value);
                                            }}  default={categ} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                {/* <option selected>Open this select menu</option> */}
                                                <option value="Bus">Bus</option>
                                                <option value="Sedan">Sedan</option>
                                                <option value="SUV">SUV</option>
                                                <option value="Hatchback">Hatchback</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={color} onChange={e => setColor(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={model} onChange={e => setModel(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={regno} onChange={e => setRegno(e.target.value)} className="form-control"></input>
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

export default EmpEdit;