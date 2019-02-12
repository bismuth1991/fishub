import React from 'react';
import { func, number } from 'prop-types';

import SpeciesOptions from './SpeciesOptions';
import WeightInput from './WeightInput';
import LengthInput from './LengthInput';
import SubmitButton from './SubmitButton';

class CatchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      species: '',
      weight: '',
      length: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const { species, weight, length } = this.state;
    const { logCatch, baitId } = this.props;

    const data = { catch: { species, weight, length } };
    logCatch(baitId, data);
  }

  render() {
    const { species, weight, length } = this.state;

    return (
      <form className="container form-row" onSubmit={this.handleSubmit}>
        <SpeciesOptions
          species={species}
          handleInputChange={this.handleInputChange}
        />
        <WeightInput
          weight={weight}
          handleInputChange={this.handleInputChange}
        />
        <LengthInput
          length={length}
          handleInputChange={this.handleInputChange}
        />
        <SubmitButton />
      </form>
    );
  }
}

CatchForm.propTypes = {
  logCatch: func.isRequired,
  baitId: number.isRequired,
};

export default CatchForm;
