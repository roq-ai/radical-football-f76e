import { ParentInterface } from 'interfaces/parent';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  name: string;
  user_id?: string;
  academy_id?: string;
  created_at?: any;
  updated_at?: any;
  parent?: ParentInterface[];
  user?: UserInterface;
  academy?: AcademyInterface;
  _count?: {
    parent?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
  academy_id?: string;
}
