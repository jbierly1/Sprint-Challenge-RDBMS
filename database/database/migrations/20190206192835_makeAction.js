
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
        tbl.increments();
        tbl.string('description', 200).notNullable();
        tbl.string('notes',400);
        tbl.boolean('completed');
        tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects');
      })
};

exports.down = function(knex, Promise) {
    
        return knex.schema.dropTableIfExists('actions')

};