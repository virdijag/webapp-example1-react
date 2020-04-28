import React, { Component } from 'react';

class SearchArticle extends Component {
    render() {
        return (
            <div className="search-articles row justify-content-center my-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            id="SearchArticle"
                            type="text"
                            className="form-control"
                            aria-label="Search Article"
                            onChange={e => this.props.searchArticles(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sort by: <span className="caret" />
                            </button>

                            <div className="sort-menu dropdown-menu dropdown-menu-right">
                                <button className={
                                    'sort-by dropdown-item '+
                                    (this.props.orderBy === 'articleName' ? 'active':'')
                                } 
                                onClick={e => this.props.changeOrder('articleName', this.props.orderDir)}
                                href="#">
                                    Article Name
                                </button>
                                <button className={
                                    'sort-by dropdown-item '+
                                    (this.props.orderBy === 'creationDate' ? 'active':'')
                                } 
                                onClick={e => this.props.changeOrder('creationDate', this.props.orderDir)}
                                href="#">
                                    Date
                                </button>
                                <button className={
                                    'sort-by dropdown-item '+
                                    (this.props.orderBy === 'author' ? 'active':'')
                                } 
                                onClick={e => this.props.changeOrder('author', this.props.orderDir)}
                                href="#">
                                    Author
                                 </button>
                                <div role="separator" className="dropdown-divider" />
                                <button className={
                                    'sort-by dropdown-item '+
                                    (this.props.orderDir === 'asc' ? 'active':'')
                                }
                                onClick={e => this.props.changeOrder(this.props.orderBy, 'asc')}
                                href="#">
                                    Asc
                                </button>
                                <button className={
                                    'sort-by dropdown-item '+
                                    (this.props.orderDir === 'desc' ? 'active':'')
                                } 
                                onClick={e => this.props.changeOrder(this.props.orderBy, 'desc')}
                                href="#">
                                    Desc
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchArticle;