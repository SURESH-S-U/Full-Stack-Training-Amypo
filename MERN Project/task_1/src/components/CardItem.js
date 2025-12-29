function CardItem(props) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body text-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button className="btn btn-primary">View</button>
      </div>
    </div>
  );
}

export default CardItem;
