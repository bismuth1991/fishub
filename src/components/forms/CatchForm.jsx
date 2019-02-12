import React from 'react';

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
  }

  handleInputChange(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value,
      });
    };
  }

  render() {
    const { species, weight, length } = this.state;

    return (
      <form className="container form-row">
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

export default CatchForm;
