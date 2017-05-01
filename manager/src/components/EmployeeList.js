import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from './../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    const props = this.props;
    props.employeesFetch();
    this.createDataSource(props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set pf props that this component
    // will be rendered with. this.props is still the old set of props
    // This lifecycle function is good to react on any changes in lifecycle of this component.
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
      return <ListItem employee={employee} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
  // returns an array of employees converted from object of employees with uids
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
