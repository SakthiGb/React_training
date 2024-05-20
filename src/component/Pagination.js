import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };
  //   for (let number = 1; number <= 5; number++) {
  //     items.push(
  //       <Pagination.Item key={number} active={number === active}>
  //         {number}
  //       </Pagination.Item>
  //     );
  //   }

  return (
    <div>
      <Button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </Button>
      <span style={{ marginLeft: "5px", marginRight: "5px" }}>
        {currentPage} of {totalPages}
      </span>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
