import React, { Component } from 'react'
import AddAssign from './AddAssign';

export class Course extends Component {
    state = {
        newMark: 0,
        id: 0,
        assign: ''
    }
    // passes newMark down to App.js
    onSubmit = (e) => {
        e.preventDefault();
        this.props.updateMark(this.state.newMark, this.state.id, this.state.assign);
    }
    // updates state with the value of
    onChange(newMark, id, assign) {
        this.setState({newMark: newMark, id: id, assign: assign})
    }
    render() {
        var total = 0;
        // adds the assignment category mark to total
        function addVal(val) {
            total = total + val;
        }
        // sets total to zero
        function setZero() {
            total = 0;
        }
        return (
        <div className="course">
        {
          this.props.courses.map((course) => (
            <div key={course.id}>
                {setZero()}
                <div className="courseName">{course.courseName}</div>
                 <table> 
                 <tbody>
                     <tr>
                        <td>CATEGORY</td>
                        <td>MARK OBTAINED</td>
                        <td>TOTAL</td>
                     </tr>
                     {
                        Object.keys(course.a).map((assign, x) => (
                            <tr key={assign}>
                            <th key={x}> {assign} </th>
                            <th> 
                                <input 
                                 type="number"
                                 placeholder={course.a[assign][0]}
                                 value={this.state.name}
                                 onInput={(e) => this.onChange(e.target.valueAsNumber, course.id, assign)}
                                 className="tableInput"
                                />
                            </th>
                            <th> {course.a[assign][1]} </th>
                            <th className="tableButton">
                                <button onClick={this.onSubmit} className="tableButton">
                                    UPDATE
                                </button>
                            </th>
                            <th className="tableButton">
                                <button
                                onClick={this.props.delAssign.bind(this, course.id, assign)} 
                                className="tableButton">
                                    DEL
                                </button>
                            </th>
                            {addVal(course.a[assign][0])}
                            </tr>                              
                        ))
                     } 
                    <AddAssign id={course.id} newAssign={this.props.newAssign}/>
                </tbody>
                </table>
                <h4> Total = {total} </h4>
                <h4> Expected = {course.expected} </h4>
                <button onClick={this.props.delClass.bind(this, course.id)}>
                    DELETE CLASS
                </button>
                <br></br>
            </div>
         ))    
        } 
        </div>
        )
    }
}

export default Course
