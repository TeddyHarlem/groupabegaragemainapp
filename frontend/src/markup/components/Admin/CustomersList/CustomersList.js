import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { format } from "date-fns";
import { useAuth } from "../../../../Contexts/AuthContext";
import customerService from "../../../../services/customer.service";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

// Create the CustomersList component
const CustomersList = () => {
  // Create all the states we need to store customers data
  const [customers, setCustomers] = useState([]);
  // A state to serve as a flag to show the error message
  const [apiError, setApiError] = useState(false);
  // A state to store the error message
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  // State to track the current page
  const [page, setPage] = useState(1);
  // State to track the total number of pages
  const [totalPages, setTotalPages] = useState("");
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  // To get the logged in employee token
  const { employee } = useAuth();
  let token = null;
  if (employee) {
    token = employee.employee_token;
  }

  // Effect hook to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        // Check if there's a search query
        if (searchQuery) {
          // If there's a search query, fetch filtered data
          response = await customerService.searchCustomer(token, searchQuery);
        } else {
          // If no search query, fetch all customers
          response = await customerService.getAllCustomers(token);
        }
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCustomers(data.data);
        setTotalPages(data.totalPages);
        // Check if the current page exceeds the new total pages
        if (page > data.totalPages) {
          setPage(data.totalPages);
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
        // Setting API error flag and error message
        setApiError(true);
        setApiErrorMessage("Something went wrong");
      }
    };
    fetchData();
  }, [token, page, searchQuery]);

  // Function to handle pagination navigation
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Function to handle search input change
  const handleSearch = (e) => {
    // Get the search value
    const searchValue = e.target.value;
    // Set the search query state
    setSearchQuery(searchValue);
  };

  return (
    <>
      {/* Conditional rendering based on API error */}
      {apiError ? (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>{apiErrorMessage}</h2>
            </div>
          </div>
        </section>
      ) : (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>Customers</h2>
              {/* Search bar */}
              <div className="search-bar">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search for a customer using first name, last name, email address or phonenumber"
                  className="extended-placeholder-input"
                />
                <Button
                  className="theme-btn- btn-style-one extended-search-button "
                  onClick={handleSearch}
                >
                  <FaSearch />
                </Button>
              </div>
            </div>
            {/* Table to display customers */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Added Date</th>
                  <th>Active</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.customer_id}>
                    <td>{customer.customer_id}</td>
                    <td>{customer.customer_first_name}</td>
                    <td>{customer.customer_last_name}</td>
                    <td>{customer.customer_email}</td>
                    <td>{customer.customer_phone_number}</td>
                    <td>
                      {customer.added_date
                        ? format(
                            new Date(customer.added_date),
                            "MM/dd/yyyy HH:mm"
                          )
                        : ""}
                    </td>
                    <td>{customer.active_customer ? "Yes" : "No"}</td>
                    <td>
                      <div className="edit-delete-icons">
                        <Link to={`/admin/edit-customer/${customer.customer_id}`}>
                          {" "}
                          <FaEdit /> edit  </Link>| 
                          <Link to="/admin/customer-profile">  <FaTrash /> delete{" "} </Link>
                       
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* Pagination buttons */}
            <div className="pagination-container">
              <Button onClick={() => handlePageChange(1)} disabled={page === 1}>
                First
              </Button>
              <Button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              >
                Previous
              </Button>
              <span>{`Page ${page} of ${totalPages}`}</span>
              <Button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </Button>
              <Button
                onClick={() => handlePageChange(totalPages)}
                disabled={page === totalPages}
              >
                Last
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CustomersList;
