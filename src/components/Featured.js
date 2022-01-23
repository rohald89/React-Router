import React from 'react';
import { useParams } from 'react-router-dom';

const Featured = () => {
  // The `useParams` hook returns an object with the current URL parameters
  // this is a new hook and replaces the match object
  const { topic, name } = useParams();

  return (
    <div className="main-content">
      <h2>Featured: </h2>
      <p>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;