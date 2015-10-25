jest.dontMock('../index');

import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
let About;

describe('About Test', () => {
  beforeEach(() => {
    About = require('../index');
  });

  it('should exists', () => {
    // Render into document
    const about = TestUtils.renderIntoDocument(<About />);
    expect(TestUtils.isCompositeComponent(about)).toBeTruthy();
  });
});
