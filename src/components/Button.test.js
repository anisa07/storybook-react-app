"use strict";
exports.__esModule = true;
// Button.test.ts
var react_1 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
//👇 Imports a specific story for the test
var Button_stories_1 = require("./Button.stories");
it('renders the button in the primary state', function () {
    react_1.render(<Button_stories_1.Primary {...Button_stories_1.Primary.args}/>);
    expect(react_1.screen.getByRole('button')).toHaveTextContent('Primary');
});
