function shallowCopy(target, origin) {
  return Object.assign(target, origin);
}

function deepCopySimple(target, origin) {
  const tmp = JSON.parse(JSON.stringify(origin))
  return Object.assign(target, tmp)
}
