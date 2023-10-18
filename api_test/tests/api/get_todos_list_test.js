const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const endpoint = require('../endpoint.js');
const responseCode = require('../responseMessageCode.json');
const schema = require('../schema.json');
const testdata = require('../testdata.json');

describe('Get Todos List', () => {
  it(`Success get Todos List`, async () => {
    const getTodos = await endpoint.getTodos();
    expect(getTodos.status).to.equal(responseCode.successOk);
    expect(getTodos.body).to.be.jsonSchema(schema.getTodosSchema);
    expect(getTodos.body.length).to.be.equal(testdata.successGetListTodosLimit)
  });
});