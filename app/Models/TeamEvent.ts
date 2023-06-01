import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TeamEvent extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public date_init: Date

  @column()
  public date_end: Date

  @column()
  public event_id: bigint 

  @column()
  public team_id: bigint


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
