const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8080',
    secure: false
  },
  {
    context: '/uploads',
    target: 'http://localhost:8080',
    secure: false
  },
  {
    context: '/tmp',
    target: 'http://localhost:8080',
    secure: false
  }
];
module.exports = proxy;
