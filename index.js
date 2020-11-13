const express = require(`express`);
const cors = require('cors');
const routes = require('./src/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
process.env.TZ = 'America/Sao_Paulo';
const swaggerOptions = {
    swaggerDefinition: {

        info: {
            title: "API mybooks_myloves",
            description: "API de gerenciamento de livros",
            version: '1.0.0',
            contact: {
                name: "Marlon Brito",
                email: "marlon.oliveiradebrito@gmail.com.br"
            },
            "servers": [
                {
                    "url": "http://localhost:3333",
                    "description": "Development server"
                },
                {
                    "url": "http://localhost:3333",
                    "description": "Test server"
                },
                {
                    "url": "http://localhost:3333",
                    "description": "Production server"
                }
            ]
        }
    },
    // ['.routes/*.js']
    apis: ['./src/routes.js'],

};
// initialize swaggerJSDoc

const swaggerDocs = swaggerJsDoc(swaggerOptions);
var swaggerSpec = swaggerDocs;


const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// route for swagger.json
app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use(cors());
app.use(express.json());
app.use(routes);
const PORT = process.env.PORT || 3333;

console.log('iniciado, ouvindo porta ' + PORT + '...');

app.listen(PORT);