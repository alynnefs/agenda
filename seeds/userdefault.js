
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('contatos').del(),

    // Inserts seed entries
    knex('contatos').insert({nome: 'alynne', endereco: 'rua 1234', telefone: '999999999'})
  );
};
