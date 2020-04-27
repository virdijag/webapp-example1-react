import React, {Component} from 'react';

class AddArticles extends Component {
    render(){
        return (
            <div className="card textcenter mt-3">
            <div className="art-addheading card-header bg-primary text-white">
              Add Article
            </div>
  
            <div className="card-body">
              <form id="artForm" noValidate>
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