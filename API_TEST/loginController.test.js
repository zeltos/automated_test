const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const serverApi = 'https://wikwik-store.thefthing.com/app_mobile_stable/v2'
chai.use(chaiHttp);

var token = null

describe('GET /app_mobile_stable/v2/getCart_b2c.php', () => { 
  it('should response empty cart', (done)=> {
    chai.request(serverApi)
    .get('/getCart_b2c.php')
    .end((err,res)=> {
      should.not.exist(err);
      res.should.have.status(201);
      res.type.should.equal('application/json');
      res.body.should.be.a('object');
      res.should.be.json;
      res.body.result.should.include.keys(
        'quote_id', 'can_checkout'
        );
      done();
    })
  })
})

// for Login
describe('GET /app_mobile_stable/v2/customer/login.php', () => { 
  it('should response empty cart', (done)=> {
    chai.request(serverApi)
    .post('/customer/login.php')
    .send({"body":{"email":"email","password":"password"}})
    .end((err,res)=> {
      should.not.exist(err);
      res.should.have.status(200);
      res.type.should.equal('application/json');
      res.body.should.be.a('object');
      res.should.be.json;
      res.body.result.status_code.should.eql(200);
      res.body.result.response.should.eql('success');
      res.body.should.include.keys(
        'token'
        );
        token = res.body.token
      done();
    })
  })
})

describe('GET /app_mobile_stable/v2/customer/login.php', () => { 
  it('should response empty cart', (done)=> {
    console.log(token)
    done();
  })
})
