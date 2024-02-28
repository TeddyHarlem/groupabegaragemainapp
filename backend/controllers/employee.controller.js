// Import the employee service 
const { json } = require('express');
const employeeService = require('../services/employee.service');
// Create the add employee controller
async function createEmployee(req, res, next) {
  // console.log(req.headers); 
  // Check if employee email already exists in the database 
  const employeeExists = await employeeService.checkIfEmployeeExists(req.body.employee_email);
  // If employee exists, send a response to the client
  if (employeeExists) {
    res.status(400).json({
      error: "This email address is already associated with another employee!"
    });
  } else {
    
    try {
      const employeeData = req.body;
      // Create the employee
      const employee = await employeeService.createEmployee(employeeData);
      if (!employee) {
        res.status(400).json({
          error: "Failed to add the employee!"
        });
      } else {
        res.status(200).json({
          status: "true",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({
        error: "Something went wrong!"
      });
    }
  }
}



// Create the getAllEmployees controller 
async function getAllEmployees(req, res, next) {
  // Call the getAllEmployees method from the employee service 
  const employees = await employeeService.getAllEmployees();
  // console.log(employees);
  if (!employees) {
    res.status(400).json({
      error: "Failed to get all employees!"
    });
  } else {
    res.status(200).json({
      status: "success",
      data: employees,
    });
  }
}

// Get single employee by id
async function getEmployeeById(req, res, next) {
  try {
  const employeeId = req.params.id;
  const employee = await employeeService.getEmployeeById(employeeId);
  console.log(employee);
  if(!employee) {
    res.status(400).json({message: "Failed to get employee"});
  } else {
    res.status(200).json({status: true, data: employee});
  } 

} catch (error) {
  res.status(400).json({ message: error.message })
}
}

// Update employee info 
async function updateEmployee(req, res, next) {
  try {
    const employeeData = req.body;
    const employee = await employeeService.updateEmployee(employeeData);
    // console.log("employee", employee)
    if(!employee) {
      return res.status(400).json({message: "Failed to update"});
    } else {
      res.status(200).json({message: "Employee info is updated successfully"})
    }

  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

// Export the createEmployee controller 
module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee
};