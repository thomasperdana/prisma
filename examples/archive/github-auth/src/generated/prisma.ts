import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

const typeDefs = `
# THIS FILE HAS BEEN AUTO-GENERATED BY "PRISMA DEPLOY"
# DO NOT EDIT THIS FILE DIRECTLY

#
# Model Types
#

type Note implements Node {
  id: ID!
  owner(where: UserWhereInput): User!
  text: String!
}

type User implements Node {
  id: ID!
  githubUserId: String!
  name: String
  bio: String
  public_repos: Int!
  public_gists: Int!
  notes(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Note!]
}


#
# Other Types
#

type AggregateNote {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createNote(data: NoteCreateInput!): Note!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateNote(data: NoteUpdateInput!, where: NoteWhereUniqueInput!): Note
  deleteUser(where: UserWhereUniqueInput!): User
  deleteNote(where: NoteWhereUniqueInput!): Note
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertNote(where: NoteWhereUniqueInput!, create: NoteCreateInput!, update: NoteUpdateInput!): Note!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput!): BatchPayload!
  updateManyNotes(data: NoteUpdateInput!, where: NoteWhereInput!): BatchPayload!
  deleteManyUsers(where: UserWhereInput!): BatchPayload!
  deleteManyNotes(where: NoteWhereInput!): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type NoteConnection {
  pageInfo: PageInfo!
  edges: [NoteEdge]!
  aggregate: AggregateNote!
}

input NoteCreateInput {
  text: String!
  owner: UserCreateOneWithoutNotesInput!
}

input NoteCreateManyWithoutOwnerInput {
  create: [NoteCreateWithoutOwnerInput!]
  connect: [NoteWhereUniqueInput!]
}

input NoteCreateWithoutOwnerInput {
  text: String!
}

type NoteEdge {
  node: Note!
  cursor: String!
}

enum NoteOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NotePreviousValues {
  id: ID!
  text: String!
}

type NoteSubscriptionPayload {
  mutation: MutationType!
  node: Note
  updatedFields: [String!]
  previousValues: NotePreviousValues
}

input NoteSubscriptionWhereInput {
  AND: [NoteSubscriptionWhereInput!]
  OR: [NoteSubscriptionWhereInput!]
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NoteWhereInput
}

input NoteUpdateInput {
  text: String
  owner: UserUpdateOneWithoutNotesInput
}

input NoteUpdateManyWithoutOwnerInput {
  create: [NoteCreateWithoutOwnerInput!]
  connect: [NoteWhereUniqueInput!]
  disconnect: [NoteWhereUniqueInput!]
  delete: [NoteWhereUniqueInput!]
  update: [NoteUpdateWithoutOwnerInput!]
  upsert: [NoteUpsertWithoutOwnerInput!]
}

input NoteUpdateWithoutOwnerDataInput {
  text: String
}

input NoteUpdateWithoutOwnerInput {
  where: NoteWhereUniqueInput!
  data: NoteUpdateWithoutOwnerDataInput!
}

input NoteUpsertWithoutOwnerInput {
  where: NoteWhereUniqueInput!
  update: NoteUpdateWithoutOwnerDataInput!
  create: NoteCreateWithoutOwnerInput!
}

input NoteWhereInput {
  AND: [NoteWhereInput!]
  OR: [NoteWhereInput!]
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  owner: UserWhereInput
}

input NoteWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  notes(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Note]!
  user(where: UserWhereUniqueInput!): User
  note(where: NoteWhereUniqueInput!): Note
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  notesConnection(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NoteConnection!
  node(id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  note(where: NoteSubscriptionWhereInput): NoteSubscriptionPayload
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  githubUserId: String!
  name: String
  bio: String
  public_repos: Int
  public_gists: Int
  notes: NoteCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutNotesInput {
  create: UserCreateWithoutNotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutNotesInput {
  githubUserId: String!
  name: String
  bio: String
  public_repos: Int
  public_gists: Int
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  githubUserId_ASC
  githubUserId_DESC
  name_ASC
  name_DESC
  bio_ASC
  bio_DESC
  public_repos_ASC
  public_repos_DESC
  public_gists_ASC
  public_gists_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  githubUserId: String!
  name: String
  bio: String
  public_repos: Int!
  public_gists: Int!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  githubUserId: String
  name: String
  bio: String
  public_repos: Int
  public_gists: Int
  notes: NoteUpdateManyWithoutOwnerInput
}

input UserUpdateOneWithoutNotesInput {
  create: UserCreateWithoutNotesInput
  connect: UserWhereUniqueInput
  disconnect: UserWhereUniqueInput
  delete: UserWhereUniqueInput
  update: UserUpdateWithoutNotesInput
  upsert: UserUpsertWithoutNotesInput
}

input UserUpdateWithoutNotesDataInput {
  githubUserId: String
  name: String
  bio: String
  public_repos: Int
  public_gists: Int
}

input UserUpdateWithoutNotesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutNotesDataInput!
}

input UserUpsertWithoutNotesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutNotesDataInput!
  create: UserCreateWithoutNotesInput!
}

input UserWhereInput {
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  githubUserId: String
  githubUserId_not: String
  githubUserId_in: [String!]
  githubUserId_not_in: [String!]
  githubUserId_lt: String
  githubUserId_lte: String
  githubUserId_gt: String
  githubUserId_gte: String
  githubUserId_contains: String
  githubUserId_not_contains: String
  githubUserId_starts_with: String
  githubUserId_not_starts_with: String
  githubUserId_ends_with: String
  githubUserId_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  public_repos: Int
  public_repos_not: Int
  public_repos_in: [Int!]
  public_repos_not_in: [Int!]
  public_repos_lt: Int
  public_repos_lte: Int
  public_repos_gt: Int
  public_repos_gte: Int
  public_gists: Int
  public_gists_not: Int
  public_gists_in: [Int!]
  public_gists_not_in: [Int!]
  public_gists_lt: Int
  public_gists_lte: Int
  public_gists_gt: Int
  public_gists_gte: Int
  notes_every: NoteWhereInput
  notes_some: NoteWhereInput
  notes_none: NoteWhereInput
}

input UserWhereUniqueInput {
  id: ID
  githubUserId: String
}
`

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'githubUserId_ASC' |
  'githubUserId_DESC' |
  'name_ASC' |
  'name_DESC' |
  'bio_ASC' |
  'bio_DESC' |
  'public_repos_ASC' |
  'public_repos_DESC' |
  'public_gists_ASC' |
  'public_gists_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type NoteOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface NoteCreateWithoutOwnerInput {
  text: String
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  githubUserId?: String
  githubUserId_not?: String
  githubUserId_in?: String[] | String
  githubUserId_not_in?: String[] | String
  githubUserId_lt?: String
  githubUserId_lte?: String
  githubUserId_gt?: String
  githubUserId_gte?: String
  githubUserId_contains?: String
  githubUserId_not_contains?: String
  githubUserId_starts_with?: String
  githubUserId_not_starts_with?: String
  githubUserId_ends_with?: String
  githubUserId_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  bio?: String
  bio_not?: String
  bio_in?: String[] | String
  bio_not_in?: String[] | String
  bio_lt?: String
  bio_lte?: String
  bio_gt?: String
  bio_gte?: String
  bio_contains?: String
  bio_not_contains?: String
  bio_starts_with?: String
  bio_not_starts_with?: String
  bio_ends_with?: String
  bio_not_ends_with?: String
  public_repos?: Int
  public_repos_not?: Int
  public_repos_in?: Int[] | Int
  public_repos_not_in?: Int[] | Int
  public_repos_lt?: Int
  public_repos_lte?: Int
  public_repos_gt?: Int
  public_repos_gte?: Int
  public_gists?: Int
  public_gists_not?: Int
  public_gists_in?: Int[] | Int
  public_gists_not_in?: Int[] | Int
  public_gists_lt?: Int
  public_gists_lte?: Int
  public_gists_gt?: Int
  public_gists_gte?: Int
  notes_every?: NoteWhereInput
  notes_some?: NoteWhereInput
  notes_none?: NoteWhereInput
}

export interface UserCreateWithoutNotesInput {
  githubUserId: String
  name?: String
  bio?: String
  public_repos?: Int
  public_gists?: Int
}

export interface NoteWhereInput {
  AND?: NoteWhereInput[] | NoteWhereInput
  OR?: NoteWhereInput[] | NoteWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  owner?: UserWhereInput
}

export interface NoteUpdateInput {
  text?: String
  owner?: UserUpdateOneWithoutNotesInput
}

export interface NoteUpdateManyWithoutOwnerInput {
  create?: NoteCreateWithoutOwnerInput[] | NoteCreateWithoutOwnerInput
  connect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput
  disconnect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput
  delete?: NoteWhereUniqueInput[] | NoteWhereUniqueInput
  update?: NoteUpdateWithoutOwnerInput[] | NoteUpdateWithoutOwnerInput
  upsert?: NoteUpsertWithoutOwnerInput[] | NoteUpsertWithoutOwnerInput
}

export interface NoteUpsertWithoutOwnerInput {
  where: NoteWhereUniqueInput
  update: NoteUpdateWithoutOwnerDataInput
  create: NoteCreateWithoutOwnerInput
}

export interface UserUpdateInput {
  githubUserId?: String
  name?: String
  bio?: String
  public_repos?: Int
  public_gists?: Int
  notes?: NoteUpdateManyWithoutOwnerInput
}

export interface NoteUpdateWithoutOwnerDataInput {
  text?: String
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  githubUserId?: String
}

export interface UserCreateInput {
  githubUserId: String
  name?: String
  bio?: String
  public_repos?: Int
  public_gists?: Int
  notes?: NoteCreateManyWithoutOwnerInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateWithoutNotesDataInput {
  githubUserId?: String
  name?: String
  bio?: String
  public_repos?: Int
  public_gists?: Int
}

export interface UserCreateOneWithoutNotesInput {
  create?: UserCreateWithoutNotesInput
  connect?: UserWhereUniqueInput
}

export interface NoteCreateInput {
  text: String
  owner: UserCreateOneWithoutNotesInput
}

export interface NoteUpdateWithoutOwnerInput {
  where: NoteWhereUniqueInput
  data: NoteUpdateWithoutOwnerDataInput
}

export interface NoteCreateManyWithoutOwnerInput {
  create?: NoteCreateWithoutOwnerInput[] | NoteCreateWithoutOwnerInput
  connect?: NoteWhereUniqueInput[] | NoteWhereUniqueInput
}

export interface UserUpdateWithoutNotesInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutNotesDataInput
}

export interface UserUpsertWithoutNotesInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutNotesDataInput
  create: UserCreateWithoutNotesInput
}

export interface NoteWhereUniqueInput {
  id?: ID_Input
}

export interface NoteSubscriptionWhereInput {
  AND?: NoteSubscriptionWhereInput[] | NoteSubscriptionWhereInput
  OR?: NoteSubscriptionWhereInput[] | NoteSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NoteWhereInput
}

export interface UserUpdateOneWithoutNotesInput {
  create?: UserCreateWithoutNotesInput
  connect?: UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput
  delete?: UserWhereUniqueInput
  update?: UserUpdateWithoutNotesInput
  upsert?: UserUpsertWithoutNotesInput
}

export interface Node {
  id: ID_Output
}

export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface NotePreviousValues {
  id: ID_Output
  text: String
}

export interface User extends Node {
  id: ID_Output
  githubUserId: String
  name?: String
  bio?: String
  public_repos: Int
  public_gists: Int
  notes?: Note[]
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface BatchPayload {
  count: Long
}

export interface UserPreviousValues {
  id: ID_Output
  githubUserId: String
  name?: String
  bio?: String
  public_repos: Int
  public_gists: Int
}

export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface Note extends Node {
  id: ID_Output
  owner: User
  text: String
}

export interface AggregateNote {
  count: Int
}

export interface NoteEdge {
  node: Note
  cursor: String
}

export interface NoteSubscriptionPayload {
  mutation: MutationType
  node?: Note
  updatedFields?: String[]
  previousValues?: NotePreviousValues
}

export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateUser {
  count: Int
}

export interface NoteConnection {
  pageInfo: PageInfo
  edges: NoteEdge[]
  aggregate: AggregateNote
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  notes: (args: { where?: NoteWhereInput, orderBy?: NoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Note[]>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  note: (args: { where: NoteWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Note | null>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  notesConnection: (args: { where?: NoteWhereInput, orderBy?: NoteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<NoteConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createNote: (args: { data: NoteCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Note>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateNote: (args: { data: NoteUpdateInput, where: NoteWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Note | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteNote: (args: { where: NoteWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Note | null>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertNote: (args: { where: NoteWhereUniqueInput, create: NoteCreateInput, update: NoteUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Note>
  updateManyUsers: (args: { data: UserUpdateInput, where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyNotes: (args: { data: NoteUpdateInput, where: NoteWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyNotes: (args: { where: NoteWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  note: (args: { where?: NoteSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<NoteSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Note: (where: NoteWhereInput): Promise<boolean> => super.existsDelegate('query', 'notes', { where }, {}, '{ id }')
  }

  query: Query = {
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    notes: (args, info): Promise<Note[]> => super.delegate('query', 'notes', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    note: (args, info): Promise<Note | null> => super.delegate('query', 'note', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    notesConnection: (args, info): Promise<NoteConnection> => super.delegate('query', 'notesConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createNote: (args, info): Promise<Note> => super.delegate('mutation', 'createNote', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateNote: (args, info): Promise<Note | null> => super.delegate('mutation', 'updateNote', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteNote: (args, info): Promise<Note | null> => super.delegate('mutation', 'deleteNote', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertNote: (args, info): Promise<Note> => super.delegate('mutation', 'upsertNote', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyNotes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyNotes', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyNotes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyNotes', args, {}, info)
  }

  subscription: Subscription = {
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    note: (args, infoOrQuery): Promise<AsyncIterator<NoteSubscriptionPayload>> => super.delegateSubscription('note', args, {}, infoOrQuery)
  }
}