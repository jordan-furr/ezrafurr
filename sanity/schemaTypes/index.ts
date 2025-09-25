import { type SchemaTypeDefinition } from 'sanity'

import { artType } from './artType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { blockContentType } from './blockContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artType, categoryType, postType, blockContentType],
}
