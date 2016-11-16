exports.up = function(knex, Promise) {
  return knex.schema.
      createTable('contatos', function (table) {
        table.increments('idcontato');
        table.string('nome').notNullable();
        table.string('endereco');
        table.string('telefone');
      });
    ;
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contatos');
};
