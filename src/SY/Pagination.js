import React from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  display: inline-block;
  list-style: none;
  text-align: center;
//   border-radius: 3px;
  color: white;
  padding: 1px;
  background-color: #9450ab; /* 마켓컬리 컬러 */
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  padding: 5px;
  width: 30px;
  &:hover {
    cursor: pointer;
    // color: white;
    background-color: #5f0080;
  }
  &:focus::after {
    color: white;
    // background-color: #9450ab;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    // color: white;
    // background-color: #263a6c;
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <div>
        <nav style={{overflow:'hidden', textAlign: 'center', margin: '100px 0px 50px 0px'}}>
          <PageUl className="pagination">
            {pageNumbers.map((number) => (
              <PageLi key={number} className="page-item">
                <PageSpan onClick={() => paginate(number)} className="page-link">
                  {number}
                </PageSpan>
              </PageLi>
            ))}
          </PageUl>
        </nav>
      </div>
    );
  };  
  export default Pagination;