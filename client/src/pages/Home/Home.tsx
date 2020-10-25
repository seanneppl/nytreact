import React, { useState } from "react";
import Input from "../../components/Input";
import ListItem from "../../components/ListItem";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../types/interfaces';
import { searchArticles, clearSearch } from "../../flux/actions/searchActions";
import { addArticle } from '../../flux/actions/articlesActions';

// import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:3002');

const Home = () => {
  const [term, setTerm] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  const results = useSelector((state: RootState) => state.search.articles);
  const dispatch = useDispatch();

  // const [todos, setTodos] = useState<ITodo[]>([])

  const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    dispatch(searchArticles({ term, startYear, endYear }))
  };

  const handleSave = (id: number) => {
    const article: any = results[id];

    dispatch(addArticle({
      title: article.headline.main,
      url: article.web_url,
      pubdate: article.pub_date
    }))

    //socket .emit goes here
    // socket.emit('save', results[id].headline.main);
    // socket.on('save', (message) => console.log(message));
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(clearSearch());
  };

  return (
    <>
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
                  value={term}
                  id={"search-term"}
                  name={"searchTerm"}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => setTerm(e.currentTarget.value)}
                  for={"search"}
                />

                <Input
                  title={"Start Year (Optional)"}
                  value={startYear}
                  id={"start-year"}
                  name={"startyear"}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => setStartYear(e.currentTarget.value)}
                  for={"start-year"}
                />

                <Input
                  title={"End Year (Optional)"}
                  value={endYear}
                  id={"end-year"}
                  name={"endyear"}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => setEndYear(e.currentTarget.value)}
                  for={"end-year"}
                />
                <button onClick={handleFormSubmit} type="submit" className="btn btn-default" id="run-search">
                  <i className="fa fa-search"></i> Search</button>
                <button onClick={handleClear} className="btn btn-default" id="clear-all">
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
                {results &&
                  results.map((each: any, index) => {
                    return (
                      <ListItem
                        key={index}
                        id={each._id}
                        title={each.headline.main}
                        pubdate={each.pub_date}
                        url={each.web_url}
                        onClick={() => handleSave(index)}
                        buttonValue={"Save"}
                      />
                    );
                  }
                  )
                }
              </ul>

            </div>
          </div>
        </div>
      </div>


    </>
  )
};

export default Home;
