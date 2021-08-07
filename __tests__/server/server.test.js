const app = require('/Users/haoshenli/Desktop/Hack/product-api/server.js')
const supertest = require('supertest');
const apptest = supertest(app)
it ('return sum of a+b', () => {

  const total = 1+2;

  expect(total).toBe(3)
})

it('gets the test endpoint', async () => {
  const response = await apptest.get('/')
  expect(response.status).toBe(200)

 })


 it('gets the products', async () => {
  const response = await apptest.get('/products')
  expect(response.body.length).toBe(5)

 })

// test('should return a 200 response', function(done){
//   api.get('/')
//   .set('Accept', 'application/json')
//   .expect(200, done);
// })
// test('should be an object of product with id=1', function(done){
//   api.get('/products/1')
//   .set('Accept', 'application/json')
//   .expect(200)
//   .end(function(err, res){
//     expect(res.body.name).toBe("Camo Onesie");
//   })
// })
