const nativeExtension = require('../');
const assert = require('assert');

describe('getting bigger', function() {
  it('gets bigger over time', function(done) {
    const obj = new nativeExtension.MyObject(0);
    let last = 0;
    // blocking
    for (let i = 0; i < 1000000; ++i) {
      const another = obj.another();
      last = another;
      console.log(last);
    }

    assert(last >= 0);
  });
});
