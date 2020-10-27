import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
    rating: 5,
  },
  {
    id: 2,
    name: "rice",
    image:
      "https://lh3.googleusercontent.com/proxy/Dt02hJtYEUjCkWVOR5DMD6KKODaZ9MQjcLqYH6ct-b5QQ4qpMGE35O16GOIV8Ht3T5I3B84e2Pi0FcbONQPoAng",
    rating: 4.5,
  },
  {
    id: 3,
    name: "pork",
    image:
      "https://lh3.googleusercontent.com/proxy/sjROL14QK7wQpASMwSIKu2t_iTxyMzjqgwYuffACfbzDDo44aDZHlgdATTr-1HBCe6RhYx_W4VLzFwn6USn3q-0gnouuyB_eetwcGrNZFZO8Qg5jS96Rsm1zmw",
    rating: 4.7,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
