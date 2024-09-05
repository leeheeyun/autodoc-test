import { jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

var TestComp = function TestComp() {
  var count = useState(0)[0];
  return jsxs("div", {
    children: [count, "button"]
  });
};

export { TestComp };
//# sourceMappingURL=index.js.map
