const connection = require('../Database/connection');

module.exports = {

    async index(request, response) {

        const books = await connection('books').select('*');

        if (!books) {

            return response.json({ Status: "nenhum livro encontrado!" });

        }

        return response.json(books);

    },

    async insert(request, response) {

        try {
            const {title, autor, user,serie, read, cover, back, age, stars, year, obs, gener } = request.body;

            const id = await connection('books')
                .insert({
                    title,
                    autor,
                    user,
                    serie,
                    read,
                    cover,
                    back,
                    age,
                    stars,
                    year,
                    obs,
                    gener
                });

            if (!id) {

                return response.status(400).json({ Status: 'ERRO' });

            }

            return response.status(400).json({ id });

        } catch (error) {

            return response.status(400).json({ Status: 'ERRO', error });

        }
    },

    async update(request, response) {
        try {
            const { id, title, autor, serie, read, cover, back, age, stars, year, obs, gener } = request.body;

            const resp = await connection('books')
                .where({ id })
                .update({
                    title,
                    autor,
                    serie,
                    read,
                    cover,
                    back,
                    age,
                    stars,
                    year,
                    obs,
                    gener
                });

            if (!resp) {

                return response.status(400).json({ Status: 'ERRO' });
            }

            return response.status(400).json({ resp });

        } catch (error) {

            return response.status(400).json({ Status: 'ERRO', error });

        }

    },

    async delete(request, response) {

        try {
            const { id } = request.body
            const resp = await connection('books')
                .where({ id })
                .update({
                    status: 0
                });

            if (!resp) {
                return response.status(400).json({ Status: 'ERRO' });
            }

            return response.status(400).json({ resp });

        } catch {

            return response.status(400).json({ Status: 'ERRO', error });

        }
    }
}