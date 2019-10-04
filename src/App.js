import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }
  
  componentDidMount() {
    axios.get("/api/students").then(response => {
      console.log(response.data);
    });
  }
  
  render() {
    const mappedStudents = this.state.students.map(student => {
      return (
      <div key={student.id}>
        <div>{student.name}</div>
        <div>{student.id}</div>
      </div>
    );
  });
    return (
    <div className="App">
    <h1>Students</h1>
    {mappedStudents}
    </div>
    );
}
}

export default App;