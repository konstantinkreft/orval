/**
 * Generated by orval v6.6.4 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'

export const getListPetsMock = () => ([...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({id: (()=>faker.datatype.number({min:1,max:99999}))(), name: (()=>faker.name.lastName())(), tag: (()=>faker.name.lastName())()})))

export const getShowPetByIdMock = () => ((()=>({id:faker.datatype.number({min:1,max:99}),name:faker.name.firstName(),tag:faker.helpers.randomize([faker.datatype.string(),void 0])}))())

export const getSwaggerPetstoreMSW = () => [
rest.get('*/v:version/pets', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getListPetsMock()),
        )
      }),rest.post('*/v:version/pets', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/v:version/pets/:petId', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getShowPetByIdMock()),
        )
      }),]
