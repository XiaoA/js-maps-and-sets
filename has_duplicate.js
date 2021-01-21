function hasDuplicate(array) {
  const duplicateSet = new Set(array);
  if (array.length !== duplicateSet.size) {
    return true;
  } else {
    return false;
  }
};

hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false

function hasDuplicate(array) {
  const duplicateSet = new Set(array);
  if (array.length !== duplicateSet.size) {
    return true;
  } else {
    return false;
  }
};

hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false
