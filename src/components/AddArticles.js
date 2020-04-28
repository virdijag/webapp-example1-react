import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddArticles extends Component {

  constructor() {
    super();
    this.state = {
      articleName: '',
      author: '',
      creationDate: '',
      creationTime: '',
      summary: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]:value
    });
  }

  handleAdd(e){
    e.preventDefault();
    let tempArticle ={
      articleName : this.state.articleName,
      author: this.state.author,
      creationDate: this.state.creationDate + ' ' + this.state.creationTime,
      summary: this.state.summary
    };

    this.props.addArticle(tempArticle);
    this.setState({
      articleName: '',
      author: '',
      creationDate: '',
      creationTime: '',
      summary: ''
    });
    this.props.toggleForm();
  }

  render() {
    return (

      <div className={
        'card textcenter mt-3' +
        (this.props.formDisplay ? '' : ' add-article')
      }>
        <div className="art-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}>
          <FaPlus /> Add Article
            </div>

        <div className="card-body">
          <form id="artForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="articleName"
                readOnly
              >
                Article Name
                  </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="articleName"
                  placeholder="Article Name"
                  value={this.state.articleName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="author"
              >
                author
                  </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="author"
                  placeholder="Author"
                  value={this.state.author}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="creationDate"
              >
                Date
                  </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="creationDate"
                  id="creationDate"
                  value={this.state.creationDate}
                  onChange={this.handleChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="creationTime"
              >
                Time
                  </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="creationTime"
                  id="creationTime"
                  value={this.state.creationTime}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="summary">
                Summary
                  </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="summary"
                  id="summary"
                  placeholder="Summary"
                  value={this.state.summary}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Article
                    </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddArticles;