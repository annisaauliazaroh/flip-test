const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const getTodos = (params) => api.get(`/todos`)
    .query(params);

const getUsers = (params) => api.get(`/users`)
    .query(params);

module.exports = {
    getTodos,
    getUsers,
};