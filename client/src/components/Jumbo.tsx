import React from "react";

type JumboProps = {
  title: string,
}

const Jumbo: React.FC<JumboProps> = props => (
  <div className="jumbotron">
    <h1 className="text-center">
      <strong>
        <i className="fa fa-newspaper-o"></i>{props.title}</strong>
    </h1>
  </div>
);

export default Jumbo;