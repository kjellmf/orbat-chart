
export function walkTree(root, callback) {
  let level = 0;

  function helper(currentUnit, parent) {
    callback(currentUnit, level, parent);
    if (currentUnit.subUnits) {
      level += 1;
      for (const subUnit of currentUnit.subUnits) {
        helper(subUnit, currentUnit);
      }
      level -= 1;
    }
  }

  helper(root, null);
}

export function createElement(element_name) {
  return document.createElementNS('http://www.w3.org/2000/svg', element_name);
}
