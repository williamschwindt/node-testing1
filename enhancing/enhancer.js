module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if(!item.name || !item.durability || !item.enhancment) {
    throw new Error('item needs name, durability, and enhancment values')
  }
  return { 
    ...item,
    durability: 100
  };
}

function get(item) {
  return { ...item };
}
