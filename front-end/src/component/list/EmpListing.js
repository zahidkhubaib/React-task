import { useEffect, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../page-bluk";

import { VscArrowDown, VscArrowUp } from "react-icons/vsc";

const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    let PageSize = 3

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const data = empdata?.slice(firstPageIndex, lastPageIndex);

    const LoadDetail = (id) => {
        navigate("/dashboard/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/dashboard/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3000/dashboard/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


    useEffect(() => {
        fetch("http://localhost:3000/dashboard").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })

    }, [])
    const submitSorting = (data) => {
        console.log("data", data)
        if (data === "1") {

            const asynding = empdata.sort((a, b) => {
                return a.categ > b.categ ? 1 : -1

            });
            empdatachange([...asynding])
            console.log("helo", empdata)
        }
        else if (data === "2") {

            const asynding = empdata.sort((a, b) => {
                return b.categ > a.categ ? 1 : -1

            });
            empdatachange([...asynding])
            console.log("helo", empdata)
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Vehicle Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td > <span value={1} onClick={() => submitSorting("1")}>
                                    <VscArrowDown />
                                </span>
                                    <span value={2} onClick={() => submitSorting("2")}> <VscArrowUp />  </span>
                                    categories </td>
                                <td>color</td>
                                <td>model</td>
                                <td>registration-no</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {data &&
                                data.length > 0 &&
                                data.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.categ}</td>
                                        <td>{item.model}</td>
                                        <td>{item.color}</td>
                                        <td>{item.regno}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                        <Pagination
                            onepage={currentPage}
                            paginate={(page) => { setCurrentPage(page) }}
                            postsPerPage={PageSize}
                            totalPosts={empdata?.length}
                        />
                    </table>

                </div>

            </div>

        </div>
    );
}

export default EmpListing;