jest.dontMock('../index');

import React from 'react/addons';
let TestUtils = React.addons.TestUtils;
let About;

describe('About Test', () => {

  beforeEach(function() {
    About = require('../index');
  });

  it('should exists', function() {
    // Render into document
    let about = TestUtils.renderIntoDocument(<About />);
    expect(TestUtils.isCompositeComponent(about)).toBeTruthy();
  });
});
