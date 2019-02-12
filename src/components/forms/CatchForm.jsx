import React from 'react';

class CatchForm extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-row">
            <div className="col">
              <div className="input-group">
                <select
                  className="form-control"
                >
                  <option disabled value="">Species</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="input-group">
                <input
                  className="form-control"
                  type="number"
                />
                <div className="input-group-append">
                  <span className="input-group-text">pounds</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="input-group">
                <input
                  className="form-control"
                  type="number"
                />
                <div className="input-group-append">
                  <span className="input-group-text">inches</span>
                </div>
              </div>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-outline-secondary">
                <span role="img" aria-label="fish">🐟 </span>
                <span>Log Catch</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CatchForm;
