'use strict'

const Schema = use('Schema')

class ProjectMemberSchema extends Schema {
  up () {
    this.create('project_members', (table) => {
      table.increments()
      table.integer('user_id');
      table.integer('project_id');
      table.timestamps()
    })
  }

  down () {
    this.drop('project_members')
  }
}

module.exports = ProjectMemberSchema
