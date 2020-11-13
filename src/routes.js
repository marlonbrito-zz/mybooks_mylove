const { Router } = require('express');

const Books = require('./Controllers/BooksController')

const routes = Router();

/**
* @swagger
* /books:
*   get:
*     tags:
*       - Books
*     description: Consultar livros      
*     responses:
*       '200':
*           description: Retorna livros salvos
*/
routes.get('/books', Books.index);

/**
 * @swagger
 *  /books:
 *   post:
 *     tags:
 *        - Books
 *     description: Cadastra novo livro
 *     produces:
 *        - application/json 
 *     parameters:
 *      
 *        - name: Dados da transação
 *          required: true
 *          in: body
 *          type: string
 *          example: {"title":"Um amor de Cinema", "autor":"Marlon Brito","user":"Marlon", "serie":"0", "read":"1", "cover":"capa.js", "back":"fundo.js", "age":"+18", "stars":"5", "year":"2009", "obs":"Livro conta hitória de um casal que se conhecem em meio a escravi...", "gener":"Romance" }
 *          description: "title: titulo do livro, autor: autor do livro, serie: faz parte de uma série, read: ja foi lido?, cover: foto da capa, back: foto do fundo, age: classificação etária, stars: avaliação do usuario, year: ano de lançamento, obs: observações gerais, gener: genero literário."
 *  
 *     responses:
 *       '200':
 *         description: id do usuario criado. 
 */
routes.post('/books', Books.insert);


module.exports = routes