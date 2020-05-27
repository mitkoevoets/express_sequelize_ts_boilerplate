import { Request } from 'express';

export interface LoadedRequest extends Request {
  entity: any;
}
