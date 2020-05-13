module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(!item.name || !item.durability || !item.enhancment) {
    throw new Error('item needs name, durability, and enhancment values')
  }

  if(item.enhancment > 20 || item.enhancment < 0) {
    throw new Error('item enhancment must be between 0 and 20')
  }
  
  if(item.enhancment === 20) {
    return { ...item }
  }

  if(item.enhancment < 20) {
    return {
      ...item,
      enhancment: item.enhancment + 1
    };
  }
}

function fail(item) {
  if(!item.name || item.durability === null || item.enhancment === null) {

    throw new Error('item needs name, durability, and enhancment values')
  }

  if(item.enhancment > 20 || item.enhancment < 0) {
    throw new Error('item enhancment must be between 0 and 20')
  }

  if(item.enhancment < 15 && item.durability < 5) {
    return {
      ...item,
      durability: 0
    }
  }

  if(item.enhancment < 15 && item.durability >= 5) {
    return {
      ...item,
      durability: item.durability - 5
    }
  }

  if(item.enhancment === 15 && item.durability < 10) {
    return {
      ...item,
      durability: 0
    }
  }

  if(item.enhancment === 15) {
    return {
      ...item,
      durability: item.durability - 10
    }
  }

  if(item.enhancment === 16 && item.durability < 10) {
    return {
      ...item,
      durability: 0
    }
  }

  if(item.enhancment === 16) {
    return {
      ...item,
      durability: item.durability - 10
    }
  }

  if(item.enhancment > 16 && item.durability < 10) {
    return {
      ...item,
      durability: 0,
      enhancment: item.enhancment - 1
    }
  }

  if(item.enhancment > 16) {
    return {
      ...item,
      durability: item.durability - 10,
      enhancment: item.enhancment - 1
    }
  }

  return {
    ...item
  }
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
