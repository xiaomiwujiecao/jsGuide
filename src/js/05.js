function createKeyToOldIdx(children, beginIdx, endIdx) {

  let i, key;

  const map = {};

  for (i = beginIdx; i <= endIdx; ++i) {

    key = children[i].key;

    if (isDef(key)) map[key] = i;

  }

  return map;

}
