{ console.log('--- --- name of exercise --- ---')

console.log('--- test cases ---')

  // some initial cases are given
  //  inject some bad test cases?
  // develop more by trial and error
  let test_cases = [
    {name: 'stepper: 0, acumul: 0', args: [0, 0], expected: {acumul: 6, stepper: 3}}
  ];

console.log('--- es6 code ---')
  /* things to hit
    - http://es6-features.org/#Constants
    block scopes & const
    enhanced object literals
    for in/of loops
    template literals
    destructuring
    sets & maps  - nope, too much?
    ie.
      const a = {e:0,f:1}
      const b = {e:0,f:1}
      const c = {...a, ...b}
    see how much es6 can be nicer to read and shorten your work
      but can be worked around, or 'polyfilled'
  */

  for (let i = 0; i < test_cases.length; i++) {
    // process & validate input
    let stepper = test_cases[i].args[0];
    let acumul = test_cases[i].args[1];
    let expected = test_cases[i].expected;

    // run the script & declare expected
    // this script is not interesting, it's all very es5 already
    while (stepper < 3) {
      acumul += stepper * 2
      stepper++
    }

    const actual = {acumul, stepper}


    // communicate results to the developer
    const stringed_actual = JSON.stringify(actual);
    const stringed_expected = JSON.stringify(expected);
    console.assert(stringed_actual === stringed_expected, {name: test_cases[i].name, actual, expected})
  };


console.log('--- transpiled es5 code ---')

  // use this site: https://babeljs.io/repl
  //  the default settings are good

  for (let i = 0; i < test_cases.length; i++) {
    // process & validate input
    let stepper = test_cases[i].args[0];
    let acumul = test_cases[i].args[1];
    let expected = test_cases[i].expected;

    // run the script & declare expected
    while (stepper < 3) {
      acumul += stepper * 2;
      stepper++;
    }

    var actual = { acumul: acumul, stepper: stepper };


    // communicate results to the developer
    const stringed_actual = JSON.stringify(actual);
    const stringed_expected = JSON.stringify(expected);
    console.assert(stringed_actual === stringed_expected, {name: test_cases[i].name, actual, expected})
  };

console.log('--- uglified code ---')

  // uglify es5 code here: https://www.uglifyjs.net
  //  set it to mangle all names
  //  then you'll have to go through and realign all names for it to run

  for (let i = 0; i < test_cases.length; i++) {
    // process & validate input
    let stepper = test_cases[i].args[0];
    let acumul = test_cases[i].args[1];
    let expected = test_cases[i].expected;

    // run the script & declare expected
    while(stepper<3){acumul+=stepper*2;stepper++}var actual={acumul:acumul,stepper:stepper};


    // communicate results to the developer
    const stringed_actual = JSON.stringify(actual);
    const stringed_expected = JSON.stringify(expected);
    console.assert(stringed_actual === stringed_expected, {name: test_cases[i].name, actual, expected})
  };

console.log('--- refactored code ---')

  // refactor the uglified code to have nice style

  for (let i = 0; i < test_cases.length; i++) {
    // process & validate input
    let stepper = test_cases[i].args[0];
    let acumul = test_cases[i].args[1];
    let expected = test_cases[i].expected;

    // run the script & declare expected
    while(stepper<3){
      acumul+=stepper*2;
      stepper++
    }
    var actual = {acumul, stepper};


    // communicate results to the developer
    const stringed_actual = JSON.stringify(actual);
    const stringed_expected = JSON.stringify(expected);
    console.assert(stringed_actual === stringed_expected, {name: test_cases[i].name, actual, expected})
  };


}