process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('CashDispense Api', ()=>{
    it('should should dispens valid amounts based on the available denominations',(done) => {

        let params = {
            cash : '200'
        }

        chai.request(server)
            .post('/atm')
            .send(params)
            .end((err,res)=>{
                res.should.have.status(200)
                res.body.should.have.property("fifty").eql(4);
                done();
            });
    });
});