import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={styles.sceneStyle}>
      <Scene key='auth'>
        <Scene key="login" component={LoginForm} title="Login" initial />
      </Scene>
      <Scene key='main'>
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle='add'
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
      </Scene>
    </Router>
  );
};

const styles = {
  sceneStyle: {
    paddingTop: 65
  }
};

export default RouterComponent;
