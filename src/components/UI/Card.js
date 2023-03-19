import './Card.css';

function Card(props) {
  // this is a wrapper component, props.children refers to what is rendered inside <Card> components
  const classes = 'card ' + props.className;

  return (
    <div className={classes}>{props.children}</div>
  );
}

export default Card;