import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Login from './pages/login';
import Register from './pages/register';

const Routes = createAppContainer(
    createStackNavigator({
        Register: {
            screen: Register,
            navigationOptions: {
                title: 'Register',
                headerShown: false,
            }
        },Login: {
            screen: Login,
            
            navigationOptions: {
                title: 'Login',
                headerShown: false,
            }
        },
        
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Mybooks',
                headerShown: false,
            }
        }, 

    }, {
        defaultNavigationOptions: {
            headerTintColor:'#FFF',
            headerTitleAlign:'center',
            headerBackTitleVisible: null,
            headerStyle: {
                backgroundColor:'#7d40e7'
            }
        },
    })
);

export default Routes;