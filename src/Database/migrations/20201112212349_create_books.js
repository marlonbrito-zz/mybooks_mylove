exports.up = function (knex) {
    return knex.schema.createTable('books', function (table) {
        table.increments('id').primary();
        table.string('title').notNullable().comment('Titulo do livro');
        table.string('user').notNullable().comment('Usuário que cadastrou o livro');
        table.string('autor').notNullable().comment('Autor do livro');
        table.string('serie').notNullable().comment('o livro faz parte de uma série?');
        table.string('read').notNullable().comment('O livro ja foi lido?');
        table.string('cover').notNullable().comment('Foto da capa');
        table.string('back').notNullable().comment('Foto do fundo');
        table.string('age').notNullable().comment('Classificação etária');
        table.string('stars').notNullable().comment('Avaliação estrelas');
        table.integer('year', 4).notNullable().comment('Ano de lançamento');
        table.string('obs').notNullable().comment('Observações gerais');
        table.string('gener').notNullable().comment('Genero');
        table.integer('status').notNullable().defaultTo('1').comment('o livro esta ativo?');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());


    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('books');
};