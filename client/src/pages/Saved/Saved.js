import React, { Component } from "react";
// import Jumbo from "../Jumbo";
// import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
// import NavTabs from "../NavTabs";
import ListItem from "../../components/ListItem";
import API from "../../utils/API";

// import ListItem from "../../components/ListItem";

// <Link to="/about">About</Link>
// <Redirect to="/dashboard"/>


// These pages need props and to be broken down into components

class Results extends Component {
  state = {
    articles: [],
    error: ""
  };

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles()
      .then(res => {
        this.setState({ articles: res.data });
        console.log(this.state.articles);
      }
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {

    console.log("app id", id);
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

 
  render() {


    return (

    <React.Fragment>


      <div className="row">
        <div className="col-sm-12">
          <br />

          <div className="card">

            <div className="card-header">
              <strong>
                <i className="fa fa-table"></i> Saved Articles</strong>
            </div>

            <div className="card-body" id="article-section">

              <ul className="list-group">
                {
                  this.state.articles.map((each, index) =>

                    <ListItem
                      title={each.title}
                      pupdate={each.pubdate}
                      key={each._id}
                      url={each.url}
                      onClick={() => this.deleteArticle(each._id)}
                      buttonValue={"X"}
                    />
                  )
                }
              </ul>

            </div>
          </div>
        </div>
      </div>


    </React.Fragment>
    
  )
    

  }
};

export default Results;
