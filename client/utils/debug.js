export default function debug(...args) {
  process.env.NODE_ENV === 'development' && console.log(...args);
}