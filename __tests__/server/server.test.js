
test('return sum of a+b', () => {

  const total = 1+2;

  expect(total).toBe(3)
})

var request = require('supertest');
describe('loading express', function () {
  var route;
  beforeEach(function () {
    route = require('../../routes/product');
  });
  afterEach(function () {

  });
  it('responds to /', function testSlash(done) {
    request(route)
      .get('/')
      .expect(201, done);
  });
  it('404 everything else', function testPath(done) {
    request(route)
      .get('/foo/bar')
      .expect(404, done);
  });
});
