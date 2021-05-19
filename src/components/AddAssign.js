import React, { Component } from 'react'

export class AddAssign extends Component {
    state = {
        categ: '',
        markObtained: 0,
        total: ''
    }
    newCategory(categ) {
        this.setState({categ: categ})
    }
    newMark(markObtained) {
        this.setState({markObtained: markObtained})
    }
    newTotal(total) {
        this.setState({total: total})
    }
    onSubmit = (e) => {
        e.preventDefault(); 
        this.props.newAssign(this.props.id, this.state.categ, this.state.markObtained, this.state.total)
    }
    render() {
        return (
            <tr>
                <th>
                    <input 
                     type="text"
                     placeholder="Category..."
                     value={this.state.name}
                     onInput={(e) => this.newCategory(e.target.value)}
                     className="tableInput"
                    />
                </th>
                <th>
                    <input 
                     type="number"
                     placeholder="Mark Obtained..."
                     value={this.state.name}
                     onInput={(e) => this.newMark(e.target.valueAsNumber)}
                     className="tableInput"
                    />
                </th>        
                <th>
                    <input 
                     type="number"
                     placeholder="Total..."
                     value={this.state.name}
                     onInput={(e) => this.newTotal(e.target.valueAsNumber)}
                     className="tableInput"
                    />
                </th>
                <th className="tableButton">
                    <button onClick={this.onSubmit} className="tableButton"> 
                        ADD
                    </button>
                </th>
            </tr>
        )
    }
}

export default AddAssign
