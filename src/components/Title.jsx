import React, { Component } from 'react';
import PropTypes from 'prop-types';

const { headline } = this.props;

class Title extends Component {
  render() {
    return <h2>{headline}</h2>;
  }
}

Title.prototypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;

// Ajuda de Nailton Júnior
