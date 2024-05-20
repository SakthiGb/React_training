import React, { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";
import Pagination from "./Pagination";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    console.log("Reached component");

    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const tblStyle = {
    textAlign: "center",
    marginLeft: "20%",
    marginRight: "20%",
    fontFamily: "Arial",
  };

  if (loading) {
    return (
      <Spinner animation="border" role="status" style={{ margin: "200px" }} />
    );
  }
  return (
    <>
      <div style={tblStyle}>
        <h2 style={{ fontFamily: "cursive" }}>Users List</h2>
        <Table responsive striped bordered hover size="lg" variant="primary">
          <thead style={{ fontWeight: "bold" }}>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name.firstname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
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

export default Users;
