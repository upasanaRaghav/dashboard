import { useRoutes } from 'react-router-dom';

<<<<<<< HEAD
// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
=======
// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
>>>>>>> c425b4cbd6d1cfd5b7d6a448d381cb3beb64247f

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
<<<<<<< HEAD
  return useRoutes([MainRoutes, LoginRoutes]);
=======
  return useRoutes([MainRoutes, AuthenticationRoutes]);
>>>>>>> c425b4cbd6d1cfd5b7d6a448d381cb3beb64247f
}
