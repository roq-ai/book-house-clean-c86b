import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { ServiceInterface } from 'interfaces/service';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  status: string;
  customer_id: string;
  service_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  user?: UserInterface;
  service?: ServiceInterface;
  _count?: {
    task?: number;
  };
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  customer_id?: string;
  service_id?: string;
}
