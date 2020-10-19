import React, { Component } from "react";
import Input from "../../components/Input";
import API from "../../utils/API";
import ListItem from "../../components/ListItem";
// import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:3002');


class Home extends Component {
  state = {
    searchTerm: "",
    startYear: "",
    endYear: "",
    results: [],
    error: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.search(this.state.searchTerm, this.state.startYear, this.state.endYear)
      .then(res => {
        this.setState({ results: res.data.response.docs }); console.log(this.state);
      })
      // .then(console.log(this.state.results))
      .catch(err => console.log(err));
  };

  handleSave = id => {

    API.saveArticle({
      title: this.state.results[id].headline.main,
      url: this.state.results[id].web_url,
      pubdate: this.state.results[id].pub_date
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    //socket .emit goes here
    // socket.emit('save', this.state.results[id].headline.main);
    // socket.on('save', (message) => console.log(message));

  };

  handleClear = event => {
    event.preventDefault();
    this.setState({ results: [] });
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
                  <i className="fa fa-list-alt"></i> Search Parameters</strong>
              </div>
              <div className="card-body">

                <form>

                  <Input
                    title={"Search Term:"}
                    value={this.state.searchTerm}
                    id={"search-term"}
                    name={"searchTerm"}
                    onChange={this.handleInputChange}
                    for={"search"}
                  />

                  <Input
                    title={"Start Year (Optional)"}
                    value={this.state.startyear}
                    id={"start-year"}
                    name={"startyear"}
                    onChange={this.handleInputChange}
                    for={"start-year"}
                  />

                  <Input
                    title={"End Year (Optional)"}
                    value={this.state.endyear}
                    id={"end-year"}
                    name={"endyear"}
                    onChange={this.handleInputChange}
                    for={"end-year"}
                  />

                  <button onClick={this.handleFormSubmit} type="submit" className="btn btn-default" id="run-search">
                    <i className="fa fa-search"></i> Search</button>
                  <button onClick={this.handleClear} className="btn btn-default" id="clear-all">
                    <i className="fa fa-trash"></i> Clear Results</button>

                </form>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-sm-12">
            <br />

            <div className="card">

              <div className="card-header">
                <strong>
                  <i className="fa fa-table"></i> Top Articles</strong>
              </div>

              <div className="card-body" id="article-section">

                <ul className="list-group">
                  {
                    this.state.results.map((each, index) =>
                      <ListItem
                        title={each.headline.main}
                        pupdate={each.pub_date}
                        key={index}
                        url={each.web_url}
                        onClick={() => this.handleSave(index)}
                        buttonValue={"Save"}
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

export default Home;
