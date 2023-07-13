import React from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  display: inline-block;
  list-style: none;
  text-align: center;
  color: white;
  padding: 1px;
  background-color: #5f0080; /* 마켓컬리 컬러 */
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
  padding: 5px;
  width: 30px;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: #cfcccd
  }
  &:focus::after {
    color: black;
    background-color: #cfcccd
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    color: black;
    background-color: #cfcccd
  }
`;

const WhiteWinePagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div style={{margin: '50px 0 150px 0'}}>
      <nav style={{textAlign: 'center'}}>
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

export default WhiteWinePagination;