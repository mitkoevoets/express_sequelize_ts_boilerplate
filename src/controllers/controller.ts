import { Request, Response } from 'express';
import { Model } from 'sequelize-typescript';
import { LoadedRequest } from '../bootstrap/LoadedRequest';

/**
 * Abstract Controller methods.
 */

/**
 * Load entity and append to request.
 */
async function load(request: LoadedRequest, response: Response, next: any, id: number, Entity: any) {
  try {
    const entityFoundResponse = await Entity.findByPk(id);

    if (!entityFoundResponse) {
      const e: Error = new Error('Entity does not exist');
      return next(e);
    }

    request.entity = entityFoundResponse;

    return next();
  } catch (error) {
    console.log('error');
    console.log(error);

    return next(error);
  }
}

/**
 *
 * @param request
 * @param response
 * @returns {any}
 */
function get(request: LoadedRequest, response: Response) {
  return response.json(request.entity);
}

/**
 *
 * @param request
 * @param response
 * @param next
 */
function create(request: LoadedRequest, response: Response, next: any, Entity: any) {
  const entity = Entity.build({
    entityName: request.body.entityName,
  });

  entity.save()
    .then((savedEntity: any) => response.json(savedEntity))
    .catch((e: any) => next(e));
}

/**
 *
 * @param request
 * @param response
 * @param next
 */
function update(request: LoadedRequest, response: Response, next: any) {
  const entity = request.entity;
  entity.entityName = request.body.entityName;
  entity.mobileNumber = request.body.mobileNumber;

  entity.save()
    .then((savedEntity: any) => response.json(savedEntity))
    .catch((e: any) => next(e));
}

/**
 *
 * @param request
 * @param response
 * @param next
 * @param Entity
 * @returns {Promise<T | void>}
 */
function list(request: Request, response: Response, next: any, Entity: any) {
  const { limit = 50 } = request.query;

  // @ts-ignore
  return Entity.findAll({ limit })
    .then((entities: Model[]) => response.json(entities))
    .catch((e:  any) => console.log(e));
}

/**
 * Delete entity.
 * @returns {Entity}
 */
function remove(request: LoadedRequest, response: Response, next: any) {
  const entity = request.entity;
  const entityName = request.entity.entityName;

  entity.destroy()
    .then(() => response.json(entityName))
    .catch((e: any) => next(e));
}

export default {
  load,
  get,
  create,
  update,
  list,
  remove,
};
