import React, { useEffect } from "react";
import ListItem from "../../components/ListItem";

import { useSelector, useDispatch } from 'react-redux';
import { getArticles, deleteArticle } from '../../flux/actions/articlesActions';
import { IArticle, RootState } from '../../types/interfaces';

const Results = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state: RootState) => state.articles.articles);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch])

  const onDelete = (id: string) => () => dispatch(deleteArticle(id));

  return (
    <>
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
                  articles.map((each: IArticle, index: number) =>
                    <ListItem
                      title={each.title}
                      pubdate={each.pubdate}
                      key={each._id}
                      id={each._id}
                      url={each.url}
                      onClick={onDelete(each._id)}
                      buttonValue={"X"}
                    />
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

export default Results;
