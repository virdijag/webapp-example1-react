import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <div>Add Article</div>
                <div>Search Articles</div>
                <div>List Articles</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
