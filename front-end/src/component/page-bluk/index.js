import React, { useContext, useEffect, useState } from "react";
import { number } from "yup";


const Pagination = ({ postsPerPage, totalPosts, paginate, onepage }) => {
  // const { onepage }: any = useContext(Appcontext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    console.log("pageNumbers1", onepage);
  }
  // const paginate=(number)=>{
  //   setSelected(number)
  // }
  console.log("number", number);
  return (
    <div>
      {pageNumbers.length > 1 && (
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li className="page-item" key={number}>
                <a
                  style={{
                    backgroundColor: onepage == number ? "#0d6efd" : "",
                    color: onepage == number ? "#fff" : "",
                  }}
                  onClick={() => paginate(number)}
                  className="page-link "
                >
                  {number}
                </a>
              </li>
            ))}
            {/* <li className="page-item">
              <a className="page-link "  onClick={() => paginate( onepage + 5 )}>next</a>
            </li> */}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Pagination;
