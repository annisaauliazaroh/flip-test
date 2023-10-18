const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const endpoint = require('../endpoint.js');
const responseCode = require('../responseMessageCode.json');
const schema = require('../schema.json');
const testdata = require('../testdata.json');

describe('Get Users List', () => {
  it(`Success get users list by status inactive`, async () => {
    const getUsersList = await endpoint.getUsers(testdata.successGetUsersInactive);
    expect(getUsersList.status).to.equal(responseCode.successOk);
    expect(getUsersList.body).to.be.jsonSchema(schema.getUsersSchema);
    getUsersList.body.map(body => expect(body.status).to.contain(testdata.successGetUsersInactive.status));
  });
});