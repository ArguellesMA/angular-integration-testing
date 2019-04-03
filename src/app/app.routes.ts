
import { UsersComponent } from './users/users.component'; 
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },

];