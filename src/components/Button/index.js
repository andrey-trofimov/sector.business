import "./style.scss";

function Button(props) {
  let { title, cb } = props;

  return <button onClick={cb}>{title}</button>;
}

export default Button;
