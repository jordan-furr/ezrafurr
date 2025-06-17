import { type SchemaTypeDefinition } from 'sanity'

import { artType } from './artType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artType],
}
