import React, { Component } from 'react';
import Course from './components/Course.js';
import AddCourse from './components/AddCourse.js';
import './App.css';
import {v4 as uuid} from 'uuid';

class App extends Component {
  state = {
    courses: []
  }
  /* sample course
       {
        id : 1,
        courseName: 'CS136',
        total : 0,
        lost : 0,
        expected : 100,
        a : {a1:[0, 100], a2:[19, 20], midterm:[2, 20]}
      }
  */
  // deletes an assignment category
  delAssign = (id, assign) => {
    this.setState({ courses: this.state.courses.map(course => {
      if (course.id === id) {
        delete course.a[assign]
      } 
      return course;
    }) });
  }
  // deletes a course
  delClass = (id, assign) => {
    this.setState({ courses: [...this.state.courses.filter(course => course.id !== id)]})
  }
  // adds a new course
  addCourse = (courseName, expected) => {
    const newCourse = {
      id : uuid(),
      courseName,
      total : 0,
      lost : 0,
      expected,
      a : {}
    }
    this.setState({ courses: [...this.state.courses, newCourse] });
  }
  // updates mark of an assignment category
  updateMark = (newMark, id, assign) => {
    this.setState({ courses: this.state.courses.map(course => {
      console.log(newMark, id, assign)
      if (course.id === id) {
        course.a[assign][0] = newMark;
      } 
      return course;
    }) });
  }
  // adds a new assignment category
  newAssign = (id, categ, markObtained, total) => {
    this.setState({ courses: this.state.courses.map(course => {
      if (course.id === id) {
        course.a[categ] = [markObtained, total]
      } 
      return course;
    }) });
  }
  render() {
    return (
      <div className="App">
        <div className="header">GradeTrack</div>
        <AddCourse addCourse={this.addCourse}/>
        <Course 
        courses={this.state.courses} 
        delAssign={this.delAssign} 
        delClass={this.delClass}
        updateMark={this.updateMark}
        newAssign={this.newAssign}
        />
      </div>
    )
  }
}

export default App;
