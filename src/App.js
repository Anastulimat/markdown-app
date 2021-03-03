import React from 'react';
import './App.css';
import { sampleText } from "./sampleText";
import marked from 'marked'

class App extends React.Component
{

  constructor(props) {
    super(props);
    this.state = {
      text: sampleText
    }
  }

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({
      text : text
    })
  }

  renderText = (text) => {
    return marked(text, {sanitize: true})
  }

  render() {
    return (
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-6">
              <h1>MarkDown</h1>
              <textarea
                  onChange={this.handleChange}
                  value={this.state.text}
                  name="text"
                  id="text"
                  cols="30"
                  rows="30"
                  className='form-control'
              >
          </textarea>
            </div>

            <div className="col-sm-6">
              <h1>Résultat</h1>
              <div  dangerouslySetInnerHTML={{ __html: this.renderText(this.state.text) }} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
