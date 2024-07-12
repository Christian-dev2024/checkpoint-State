
import './App.css';
import React from 'react';
import img from './image.jpeg'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName : 'Christian',
      bio : 'étudiant à Gomycode',
      imgSrc : img,
      profession : 'etudiant',
      show : true
    }
  }

  showprofil = () => {
    this.setState({show : !this.state.show})
  }

  render() {
    return (
      <div className="App">
        {
          this.state.show && (
            <div className="card">
              <img src= {this.state.imgSrc} alt="John" style={{width:100}}/>
              <h1>{this.state.fullName}</h1>
              <p className="title">{this.state.bio}</p>
              <p className='texte'>{this.state.profession}</p>
            </div>
          )
        }
          <p><button onClick={this.showprofil}>Display</button></p>
      </div>
    );
  }
}

export default App;
