import { createSlice } from "@reduxjs/toolkit";


const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      console.log("Add employee is called");
      state.employees.unshift(action.payload);
    },

    updateEmployee: (state, action) => {
      const index = state.employees.findIndex((emp) => emp.empId === action.payload.empId);

      if (index !== -1) {
        state.employees[index] = action.payload
      }
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter((emp) => emp.id !== action.payload)
    }
  }
})

export const { addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

export const selectEmployeeById = (state, id) => {
  return state.employee.employees.find((emp) => emp.id === id);
}


