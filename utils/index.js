function assignable(obj) {
  Object.defineProperty(obj, 'assign', {
    configurable: false,
    enumerable: false,
    value(...sources) {
      sources.forEach((source) => {
        if (!source) return;

        Object.entries(source)
          .forEach(([key, value]) => { this[key] = value; });
      });

      return this;
    },
  });

  return obj;
}

function isPromise(obj) {
  return !!obj
    && (typeof obj === 'object' || typeof obj === 'function')
    && typeof obj.then === 'function';
}

function sleep(delay) {
  return new Promise(r => setTimeout(r, delay));
}

function takeItEasy(fn, timeout = 100) {
  return async function task(...args) {
    const [res] = await Promise.all([
      fn.apply(this, args),
      sleep(timeout),
    ]);

    return res;
  };
}

module.exports = {
  assignable,
  isPromise,
  sleep,
  takeItEasy,
};
