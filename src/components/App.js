import React, { Component } from 'react';
import '../css/App.css';
import AddArticles from './AddArticles'
import SearchArticle from './SearchArticle';
import ListArticles from './ListArticles';

import {without} from 'lodash';

class App extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      lastIndex:0
    };

    this.deleteArticle = this.deleteArticle.bind(this);
  }

  deleteArticle(art){
    let tempArticle = this.state.articles;
    tempArticle = without(tempArticle, art);

    this.setState({
      articles: tempArticle
    });
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const arts = result.map(item => {
          item.artId = this.state.lastIndex;
          this.setState({lastIndex: this.state.lastIndex +1});
          return item;
        })

        this.setState({
          articles: arts
        });
      });
  }

  render() {

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">

                <AddArticles />
                <SearchArticle />
                <ListArticles articles={this.state.articles} 
                deleteArticle={this.deleteArticle}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
