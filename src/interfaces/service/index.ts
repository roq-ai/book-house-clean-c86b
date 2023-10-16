import { AppointmentInterface } from 'interfaces/appointment';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  duration: number;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];

  _count?: {
    appointment?: number;
  };
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
