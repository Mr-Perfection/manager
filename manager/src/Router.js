import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.sceneStyle}>
      <Scene key="login" component={LoginForm} title="Login" initial />
      <Scene key="employeeList" component={EmployeeList} title="Employees" />
    </Router>
  );
};

const styles = {
  sceneStyle: {
    paddingTop: 65
  }
};

export default RouterComponent;
