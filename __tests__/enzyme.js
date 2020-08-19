import React from 'react';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
// allows us to test this file:
import LoginContainer from '../client/containers/LoginContainer.js';

// something I'm not importing for jest to be able to parse it as a div... json? not equipped to read the image? jest not reading images
// maybe just comment out all the images
//

configure({ adapter: new Adapter() });

describe('React tests', () => {
  describe('AddSearchEvent', () => {
    let wrapper;

    const props = {
      test: 'true',
    };

    beforeAll(() => {
      wrapper = shallow(<LoginContainer {...props} />);
    });

    // put a json thing around wrapper?
    it('renders a div', () => {
      expect(wrapper.type()).toEqual('div');
      // expect(wrapper.find('div').hasClass('myCol')).toEqual(true);
    });
  });
});
 
//https://www.npmjs.com/package/enzyme-to-json