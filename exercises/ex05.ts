// Exercise: Creating Intersection Types

// Define types Admin and Employee with appropriate properties of your choice.
// Create an intersection type AdminEmployee that combines properties from both Admin and Employee.
// Instantiate an object using the AdminEmployee type and display the properties.

type Admin = {
  adminId: number;
  adminName: string;
};

type Employee = {
  employeeId: number;
  employeeName: string;
};

type AdminEmployee = Admin & Employee;

const adminEmployee1: AdminEmployee = {
  adminId: 1,
  adminName: 'Alice',
  employeeId: 101,
  employeeName: 'Bob',
};

console.log(adminEmployee1);
