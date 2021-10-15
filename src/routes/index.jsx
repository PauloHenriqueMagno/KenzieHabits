import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import UserGroups from '../pages/UserGroups'
import Groups from '../pages/Groups'
import Menu from '../components/Menu'

const Routes = () =>{
    return (
        <>
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/groups'>
                    <Groups />
                </Route>
                <Route path='/dashboard/groups'>
                    <UserGroups />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route path='/'>
                    <Menu />
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default Routes