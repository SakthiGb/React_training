import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Pagination from "./Pagination";

const StudentList = () => {
  const students = [
    {
      id: 1,
      name: "Alice",
      age: 20,
      present: true,
    },
    {
      id: 2,
      name: "Bob",
      age: 22,
      present: false,
    },
    {
      id: 3,
      name: "Charlie",
      age: 21,
      present: true,
    },
    {
      id: 4,
      name: "David",
      age: 23,
      present: false,
    },
    {
      id: 5,
      name: "Kiran",
      age: 25,
      present: true,
    },
    {
      id: 6,
      name: "Dora",
      age: 13,
      present: false,
    },
    {
      id: 7,
      name: "Dravid",
      age: 33,
      present: false,
    },
    {
      id: 8,
      name: "Buji",
      age: 10,
      present: true,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStudentData = students.slice(startIndex, endIndex);

  const totalPages = Math.ceil(students.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const tblStyle = {
    marginTop: "5%",
    textAlign: "center",
    marginLeft: "20%",
    marginRight: "20%",
    fontFamily: "Arial",
  };

  return (
    <>
      <div style={tblStyle}>
        <h2 style={{ fontFamily: "cursive" }}>Students List</h2>
        <Table responsive striped bordered hover size="lg" variant="primary">
          <thead style={{ fontWeight: "bold" }}>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Status</td>
          </thead>
          <tbody>
            {currentStudentData.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.present ? "Present" : "Absent"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default StudentList;
