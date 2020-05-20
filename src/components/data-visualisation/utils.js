exports.makeRefObj = (list, key, value) => {
    const lookupObj = {};
    list.forEach((row) => {
      lookupObj[row[value]] = row[key];
    });
    return lookupObj;
  };