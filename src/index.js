const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

app.use(express.json());

const customers = [];

// Middleware
function verifyIfExistsAccountCPF(request, response, next) {
    const { cpf } = request.headers;
    const customer = customers.find((customer) => customer.cpf === cpf);

    if (!customer) {
        return response.status(400).json({ error: "Customer not found" });
    }
    request.customer = customer;

    return next();
}

app.post("/account", (request, response) => {
    const { cpf, name } = request.body;

    const customersAlredyExists = customers.some((customers) => customers.cpf === cpf);

    if (customersAlredyExists) {
        return response.status(400).json({ error: "Customer already exists !" });
    }

    const id = uuidv4();
    customers.push({
        cpf,
        name,
        id,
        statement: []
    });
    return response.status(201).send();
});

app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
    /* const { cpf } = request.params; */
    const { customer } = request;
    return response.json(customer.statement);

});

app.listen(3000);

