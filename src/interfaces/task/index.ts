import { AppointmentInterface } from 'interfaces/appointment';
import { StaffInterface } from 'interfaces/staff';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  start_time: any;
  end_time: any;
  appointment_id: string;
  staff_id: string;
  created_at?: any;
  updated_at?: any;

  appointment?: AppointmentInterface;
  staff?: StaffInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  appointment_id?: string;
  staff_id?: string;
}
