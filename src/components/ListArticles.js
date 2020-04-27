import React, { Component } from 'react';
import {FaTimes} from 'react-icons/fa';
import Moment from 'react-moment';

class ListArticles extends Component {
    render() {

        // temp variable
       // const listItems = this.props.articles.map(item => (
       ///     <div>
       //         <div>{item.articleName}</div>
        //        <div>{item.author}</div>
       //     </div>
      //  ));

        return (
            <div className="article-list item-list mb-3">
                {this.props.articles.map(item => (                    
                    <div className="article-item col media py-3" key={item.artId}>
                        <div className="mr-3">
                            <button className="article-delete btn btn-sm btn-danger"
                            onClick={() => this.props.deleteArticle(item)}>
                                <FaTimes/>
                            </button>
                        </div>

                        <div className="article-info media-body">
                            <div className="article-head d-flex">
                                <span className="article-name">{item.articleName}</span>
                                <span className="art-date ml-auto">
                                    <Moment 
                                    date={item.creationDate}
                                    parse="YYYY-MM-dd hh:mm"
                                    format="MMM-D h:mma"
                                    />
                                </span>
                            </div>

                            <div className="author-name">
                                <span className="label-item">Author: </span>
                                <span>{item.author}</span>
                            </div>
                            <div className="art-summary">{item.summary}</div>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default ListArticles;