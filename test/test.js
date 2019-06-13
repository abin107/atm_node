process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.should();

chai.use(chaiHttp);

var passCases = [200,130,490,500,140,50];
var failCases = [550,1,0,33];

describe('CashDispense Api', ()=>{

    passCases.forEach((a) => {
        it('should should dispens valid amounts based on the available denominations',(done) => {
            chai.request(server)
                .post('/atm')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({'cash':a})
                .end((err,res)=>{
                    res.should.have.status(200)
                    done();
                });
        });
    });
    failCases.forEach((a) => {
        it('should throw error when entered invalid amount',(done) => {
            chai.request(server)
                .post('/atm')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({'cash':a})
                .end((err,res)=>{
                    res.should.have.status(400)
                    done();
                });
        });
    });
});