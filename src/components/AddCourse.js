import React, { Component } from 'react'

export class AddCourse extends Component {
    state = {
        courseName: '',
        expected: 0
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addCourse(this.state.courseName, this.state.expected);
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    render() {
        return (
           <div className="addCourse">
               <input 
                type="text" 
                name="courseName" 
                placeholder="Course Name..."
                value={this.state.name}
                onChange={this.onChange}
               />
               <br></br>
               <input 
                type="text" 
                name="expected" 
                placeholder="Expected Grade..."
                value={this.state.name}
                onChange={this.onChange}
               />
               <br></br>
               <button 
                type="submit"
                value="Add"
                className="btn"
                onClick={this.onSubmit}
               >ADD</button>
           </div>
        )
    }
}

export default AddCourse
