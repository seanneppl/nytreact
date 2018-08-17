import React from "react";

const ListItem = props => (

    <li className='list-group-item articleHeadline' key={props.id}>
        <p>{props.title}</p>
        <p>{props.pubdate}</p>
        <a href={props.url}>{props.url}</a>
        <br />
        <br />
        <button className="btn btn-primary btn-lg btn-block" onClick={props.onClick}>{props.buttonValue}</button>
    </li>
);

export default ListItem;
