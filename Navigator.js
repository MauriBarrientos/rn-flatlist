import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from './screens/Home';
import { AboutScreen } from './screens/About';
import { FontAwesome6 } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export function MyTabs(){
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} 
            options= {{
                title: 'Título',
                tabBarIcon:() => {
                    return <FontAwesome6 name="users-line" size={24} color="black" />
                    },
                }}
              />
            <Tab.Screen name="About" component={AboutScreen} options= {{title: 'About'}}/>
        </Tab.Navigator>
    )
}

