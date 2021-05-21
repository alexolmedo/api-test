import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  avatar_url?: string;

  @property({
    type: 'number',
  })
  public_repos?: number;

  @property({
    type: 'number',
  })
  public_gists?: number;

  @property({
    type: 'number',
  })
  followers?: number;

  @property({
    type: 'number',
  })
  following?: number;

  @property({
    type: 'string',
  })
  login?: string;

  @property({
    type: 'string',
  })
  html_url?: string;

  @property({
    type: 'string',
    nullable: true,
    jsonSchema: {nullable: true}
  })
  name?: string;

  @property({
    type: 'string',
    nullable: true,
    jsonSchema: {nullable: true}
  })
  company?: string;

  @property({
    type: 'string',
    nullable: true,
    jsonSchema: {nullable: true}
  })
  location?: string;

  @property({
    type: 'string',
    nullable: true,
    jsonSchema: {nullable: true}
  })
  email?: string;

  @property({
    type: 'boolean',
    nullable: true,
    jsonSchema: {nullable: true}
  })
  hireable?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
