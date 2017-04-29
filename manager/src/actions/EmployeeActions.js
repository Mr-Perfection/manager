import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ props, value }) => {
  return ({
    type: EMPLOYEE_UPDATE,
    payload: { props, value }
  });
};
