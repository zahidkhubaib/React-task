import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    // const[id,idchange]=useState("");
    // const[name,namechange]=useState("");
    // const[email,emailchange]=useState("");
    // const[phone,phonechange]=useState("");
    // const[active,activechange]=useState(true);
    // const[validation,valchange]=useState(false);
    const [categ, setCateg] = useState("");
    const [model, setModel] = useState();
    const [color, setColor] = useState();
    const [regno, setRegno] = useState();

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const cardata = { categ, model, color, regno };

        console.log("empdata", cardata)
        fetch("http://localhost:3000/employee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(cardata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/');
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
                                <h2>Employee Create</h2>
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
                                        <div className="form-group">
                                            <select onChange={(e) => {
                                                setModel(e.target.value);
                                            }} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected>Select Model</option>
                                                <option value="2010">2010</option>
                                                <option value="2012">2012</option>
                                                <option value="2013">2013</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <select onChange={(e) => {
                                                setColor(e.target.value);
                                            }} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected>Select color</option>
                                                <option value="White">White</option>
                                                <option value="Red">Red</option>
                                                <option value="Blue">Blue</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <select onChange={(e) => {
                                                setRegno(e.target.value);
                                            }} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected>Select registration-no</option>
                                                <option value="LER-1019">LER-1019</option>
                                                <option value="LER-1020">LER-1020</option>
                                                <option value="LER-1021">LER-1021</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">


                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger">Back</Link>
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