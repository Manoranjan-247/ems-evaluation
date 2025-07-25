import { createSlice } from "@reduxjs/toolkit";


const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.unshift(action.payload);
    },

    updateEmployee: (state, action) => {
      const index = state.employees.findIndex((emp) => emp.empId === action.payload.empId);

      if (index !== -1) {
        state.employees[index] = action.payload
      }
    },
  }
})

export const { addEmployee, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;




