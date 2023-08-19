import { env } from '../env/env.local';

export const CONST = {
  BACKEND_ENDPOINT: env.BACKEND_URL || 'http://localhost:3001',
  FRONTEND_ENDPOINT: env.FRONTEND_URL || 'http://localhost:4200',
};