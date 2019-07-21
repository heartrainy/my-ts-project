import Users from '@containers/Users'
import Test from '@containers/Test'

interface Iroute {
  path?: string,
  component?: any,
  route?: Iroute
}

const routes: Iroute[] = [
  {
    path: '/users',
    component: Users
  },
  {
    path: '/test',
    component: Test
  }
]

export default routes