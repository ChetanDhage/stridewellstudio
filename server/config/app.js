import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { errorHandler, notFound } from '../middleware/error.js';
import authRoutes from '../routes/auth.routes.js';
import userRoutes from '../routes/user.routes.js';
import patientRoutes from '../routes/patient.routes.js';
import doctorRoutes from '../routes/doctor.routes.js';
import appointmentRoutes from '../routes/appointment.routes.js';
import exerciseRoutes from '../routes/exercise.routes.js';
import treatmentRoutes from '../routes/treatment.routes.js';
import messageRoutes from '../routes/message.routes.js';

export function createApp() {
  const app = express();

  // security & core
  app.use(helmet());
  app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*' }));
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
  app.use(rateLimit({ windowMs: 60 * 1000, max: 120 }));

  // health
  app.get('/health', (_req, res) => res.json({ status: 'ok' }));

  // routes
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/patients', patientRoutes);
  app.use('/api/doctors', doctorRoutes);
  app.use('/api/appointments', appointmentRoutes);
  app.use('/api/exercises', exerciseRoutes);
  app.use('/api/treatments', treatmentRoutes);
  app.use('/api/messages', messageRoutes);

  // errors
  app.use(notFound);
  app.use(errorHandler);

  return app;
}


