import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'team_events'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.date('date_init')
      table.date('date_end')
      table.bigint('event_id').references('event')
      table.bigint('team_id').references('team')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
