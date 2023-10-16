import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StaffInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  hire_date: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  user?: UserInterface;
  _count?: {
    task?: number;
  };
}

export interface StaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  user_id?: string;
}
