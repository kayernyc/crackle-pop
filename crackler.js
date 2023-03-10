const cracklePop = (length = 100) => {
  // guard against negative numbers
  if (typeof length === 'number' && length >= 0) {
    // get rid of decimals
    length = Math.floor(length);
    const indexes = [...Array(length).keys()]
      .map((key) => key + 1)
      .forEach((key) => {
        let message = '';

        if (key % 3 === 0) {
          message += 'Crackle';
        }
        if (key % 5 === 0) {
          message += 'Pop';
        }
        if (!message.length) {
          message = `${key}`;
        }

        console.log(message);
      });
    return;
  }

  if (typeof length !== 'number') {
    throw Error(`Input must be a number. Type received was ${typeof length}.`);
  }

  throw Error(`Input must be greater than -1. Input received was ${length}.`);
};

module.exports.cracklePop = cracklePop;
