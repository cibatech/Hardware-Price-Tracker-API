export function Choose(_Array:any[]) {
  if (!Array.isArray(_Array) || _Array.length === 0) {
    throw new Error("Input must be a non-empty array.");
  }
  const randomIndex = Math.floor(Math.random() * _Array.length);
  return _Array[randomIndex];
}
