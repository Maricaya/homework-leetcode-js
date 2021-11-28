function myObjectCreate(proto) {
  if (!(proto instanceof Object))throw new Error('');
  const result = {};
  result.__proto__ = proto;
  return result;
}