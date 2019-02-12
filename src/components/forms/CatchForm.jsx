import React from 'react';
import SpeciesOptions from './SpeciesOptions';
import WeightInput from './WeightInput';
import LengthInput from './LengthInput';
import SubmitButton from './SubmitButton';

class CatchForm extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <form className="container form-row">
        <SpeciesOptions />
        <WeightInput />
        <LengthInput />
        <SubmitButton />
      </form>
    );
  }
}

export default CatchForm;
