// Financial Calculation Module
const calculateTaxes = (function () {
  "use strict";

  // params 'salary' => in cents
  function calculateTax(salary) {
    if (salary > 18000000) {
      return 5409700 + ((salary - 18000000) / 100) * 45;
    } else if (salary > 9000000) {
      return 2079700 + ((salary - 9000000) / 100) * 37;
    } else if (salary > 3700000) {
      return 357200 + ((salary - 3700000) / 100) * 32.5;
    } else if (salary > 1820000) {
      return ((salary - 1820000) / 100) * 19;
    } else {
      return 0;
    }
  }

  // params 'salary' => in cents
  // params 'percentage' => in decimal
  function calculateSuper(salary, percentage) {
    return (salary - calculateTax(salary)) * percentage;
  }

  return {
    calculateTax: calculateTax,
    calculateSuper: calculateSuper,
  };
})();

// Testing Module
const test = (function () {
  "use strict";

  /**
   * Test funciton
   * @param {string} desc
   * @param {function} fn
   */
  function it(desc, fn) {
    try {
      fn();
      console.log("\x1b[32m%s\x1b[0m", "\u2714 " + desc);
    } catch (error) {
      console.log("\n");
      console.log("\x1b[31m%s\x1b[0m", "\u2718 " + desc);
      console.error(error);
    }
  }

  function assert(isTrue) {
    if (!isTrue) {
      throw new Error();
    }
  }

  return {
    it: it,
    assert: assert,
  };
})();

///////////////////
// Testing Cases //
///////////////////
test.it("Should return correct", function () {
  test.assert(calculateTaxes.calculateTax(1820000) === 0);
});
test.it("Should return correct", function () {
  test.assert(calculateTaxes.calculateTax(3700000) === 357200);
});
test.it("Should return correct", function () {
  test.assert(calculateTaxes.calculateTax(9000000) === 2079700);
});
test.it("Should return correct", function () {
  test.assert(calculateTaxes.calculateTax(18000000) === 5409700);
});
test.it("Should return correct", function () {
  test.assert(calculateTaxes.calculateTax(36000000) === 13509700);
});

test.it("Should return correct", function () {
  test.assert(calculateTaxes.calculateSuper(1820000, 0.1) === 182000);
});
test.it("Should return correct", function () {
  test.assert(calculateTaxes.calculateSuper(3700000, 0.1) === 334280);
});
test.it("Should return correct", function () {
  test.assert(calculateTaxes.calculateSuper(9000000, 0.1) === 692030);
});
test.it("Should return correct", function () {
  test.assert(calculateTaxes.calculateSuper(18000000, 0.1) === 1259030);
});
test.it("Should return correct", function () {
  test.assert(calculateTaxes.calculateSuper(36000000, 0.1) === 2249030);
});
