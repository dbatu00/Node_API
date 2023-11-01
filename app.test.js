const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); // Assuming your app file is named 'app.js'

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Integration Tests', () => {
  it('should get all foods', async () => {
    const res = await chai.request(app).get('/food');
    expect(res).to.have.status(200);
    expect(res.body.status).to.equal('success');
    expect(res.body.data).to.be.an('array');
  });

  // Add more test cases for other endpoints (GET, POST, PUT, DELETE) here
});

// For testing database connection
describe('Database Connection Test', () => {
  it('should connect to the database', async () => {
    // Import your pool configuration and test the database connection here
    const pool = require('./configuration/config');

    try {
      await pool.query('SELECT 1');
      // If the query runs without throwing an error, the database connection is successful
      expect(true).to.equal(true);
    } catch (error) {
      // If the query fails, the test should fail
      expect(error).to.be.null;
    }
  });
});
