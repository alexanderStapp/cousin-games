import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Home from './components/Home'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/home' component={Home} />
    </Switch>
)