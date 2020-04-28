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
      formDisplay:false,
      orderBy:'articleName',
      orderDir:'asc',
      queryText:'',
      lastIndex:0
    };

    this.deleteArticle = this.deleteArticle.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addArticle = this.addArticle.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchArticles = this.searchArticles.bind(this);
  }

  toggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  deleteArticle(art){
    let tempArticle = this.state.articles;
    tempArticle = without(tempArticle, art);

    this.setState({
      articles: tempArticle
    });
  }

  changeOrder(order, dir){
    this.setState({
      orderBy: order,
      orderDir:dir
    });
  }

  addArticle(article){

    let tempArticles = this.state.articles;
    article.artId = this.state.lastIndex;
    tempArticles.unshift(article);
    this.setState({
      articles : tempArticles,
      lastIndex: this.state.lastIndex + 1
    });
  }

  searchArticles(query){
    this.setState({queryText:query});
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

    let order;
    let filteredArticles = this.state.articles;
    if(this.state.orderDir === 'asc'){
      order =1;
    }else{
      order = -1;
    }

    filteredArticles = filteredArticles.sort((a,b) =>{
      if(a[this.state.orderBy].toLowerCase()< 
         b[this.state.orderBy].toLowerCase())
         {
           return -1 * order;
         }else{
           return 1 *order;
         }
    }).filter(eachItem => {
      return (
        eachItem['articleName']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['author']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['summary']
        .toLowerCase()
        .includes(this.state.queryText.toLowerCase()) 
      );
    });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
              
                <AddArticles
                formDisplay={this.state.formDisplay} 
                toggleForm={this.toggleForm}
                addArticle={this.addArticle}/>
                <SearchArticle
                orderBy ={this.state.orderBy}
                orderDir={this.state.orderDir}   
                changeOrder={this.changeOrder}  
                searchArticles={this.searchArticles}           
                />
                <ListArticles articles={filteredArticles} 
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
