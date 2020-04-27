import React, { Component } from 'react';
import '../css/App.css';
import AddArticles from './AddArticles'
import SearchArticle from './SearchArticle';
import ListArticles from './ListArticles';

class App extends Component {
  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddArticles/>
                <SearchArticle/>
                <ListArticles/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
