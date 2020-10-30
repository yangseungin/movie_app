import { func } from "prop-types";
import React from "react";
import { Redirect } from "react-router-dom";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log(location.state); //year title, summary, poster, genres
    if (location.state) {
      return (
        <section className='movieDetail'>
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          ></img>
          <div className='movieContent'>
            <h3 className='movieContent__title'>{location.state.title}</h3>
            <h5 className='movieContent__year'>{location.state.year}</h5>
            <ul className='movieContent_genres'>
              {location.state.genres.map((genre, index) => (
                <li key={index} className='movieContent__genre'>
                  {genre}
                </li>
              ))}
            </ul>
            <p className='movieContent__summary'>{location.state.summary}</p>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

// Detail.prototype ={}

export default Detail;
