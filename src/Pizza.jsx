const Pizza = (props) => {
  const fallbackImage = "https://picsum.photos/200";
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image || fallbackImage} alt={props.name} />
    </div>
  );
};

export default Pizza;
