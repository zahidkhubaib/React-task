import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/dashboard/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>vehicle Create</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2>The vehicle name is : <b>{empdata.categ}</b> </h2>
                        <h3>Details</h3>
                        <h5>model is : {empdata.model}</h5>
                        <h5>color is : {empdata.color}</h5>
                        <h5>regno is : {empdata.regno}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;