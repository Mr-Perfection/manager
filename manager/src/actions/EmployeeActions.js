import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  // console.log('prop is', prop, 'value is', value);
  return ({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  });
};
