import React from 'react';
import { shallow } from 'enzyme';

import { CounterBadge } from '../CounterBadge';

describe('CounterBadge', () => {
  const props = {
    tackleBoxItemCount: 1,
  };

  it('does not render when there is no item', () => {
    const wrapper = shallow(
      <CounterBadge tackleBoxItemCount={0} />,
    );
    expect(wrapper.find('.badge')).toHaveLength(0);
  });

  it('renders without crashing', () => {
    shallow(<CounterBadge {...props} />);
  });

  it('shows the correct item count', () => {
    const wrapper = shallow(
      <CounterBadge {...props} />,
    );
    expect(wrapper.find('.badge').text()).toEqual(`${props.tackleBoxItemCount}`);
  });
});
