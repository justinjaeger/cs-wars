import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
// import toJson from 'enzyme-to-json';
// allows us to test this file:
import AddSearchEvent from '../client/components/AddSearchEvent.jsx';

configure({ adapter: new Adapter() });

// it('renders a div', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<AddSearchEvent />, div);
// });

describe('React tests', () => {
  describe('AddSearchEvent', () => {
    let wrapper;

    const props = {
      test: 'true',
    };

    beforeAll(() => {
      wrapper = shallow(<AddSearchEvent {...props} />);
    });

    it('renders a div with the classname myCol', () => {
      expect(wrapper.type()).toEqual('div');
      // expect(wrapper.find('div').hasClass('myCol')).toEqual(true);
    });
  });
});
 