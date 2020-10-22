import React, { ChangeEvent } from "react";

type InputProps = {
  for: string,
  value: string,
  title: string,
  id: string,
  name: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => (
  <div className='form-group'>
    <label htmlFor={props.for}>{props.for}</label>
    <input value={props.value} type="text" className="form-control" id={props.id} name={props.name} onChange={props.onChange} />
  </div>
);

export default Input;
