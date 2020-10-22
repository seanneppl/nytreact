import React, { Component } from "react";
import ListItem from "../../components/ListItem";
import API from "../../utils/API";

interface IArticle extends Document {
  title: string
  url: string
  pubdate: string
  date: string
  _id: string
}

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

  deleteArticle = (id: string) => {

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
                    this.state.articles.map((each: IArticle, index: number) =>

                      <ListItem
                        title={each.title}
                        pubdate={each.pubdate}
                        key={each._id}
                        id={each._id}
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
