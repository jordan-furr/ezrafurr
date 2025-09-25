import { type SchemaTypeDefinition } from 'sanity'

import { artType } from './artType'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artType, categoryType],
}
