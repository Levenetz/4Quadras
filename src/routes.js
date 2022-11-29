import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './pages/Home'
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {Ionicons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 
import Quadrass from "./pages/Home";


const Tab = createBottomTabNavigator();


function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name="Quadras"

            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({color,size,focused}) => {
                    if(focused){
                        return <MaterialCommunityIcons name="soccer-field" size={24} color="green" />
                    }
                    return <MaterialCommunityIcons name="soccer-field" size={24} color="black" />
                }
            }}
            />
             <Tab.Screen
            name="Adicionar Quadra"
            component={Profile}
            options={{
                headerShown: false,
                tabBarIcon: ({color,size,focused}) => {
                    if(focused){
                        return <MaterialCommunityIcons name="soccer-field" size={24} color="green" />
                    }
                    return <MaterialCommunityIcons name="soccer-field" size={24} color="black" />
                }
            }}
            />
             <Tab.Screen
            name="Usuarios"
            component={Favorites}
            options={{
                headerShown: false,
                tabBarIcon: ({color,size,focused}) => {
                    if(focused){
                        return <AntDesign name="user" size={24} color="green" />
                    }
                    return <AntDesign name="user" size={24} color="black" />
                }
            }}
            />
             <Tab.Screen
            name="Adicionar Usuario"
            component={Search}
            options={{
                headerShown: false,
                tabBarIcon: ({color,size,focused}) => {
                    if(focused){
                        return <AntDesign name="addusergroup" size={24} color="green" />
                    }
                    return <AntDesign name="addusergroup" size={24} color="black" />
                }
            }}
            />
        </Tab.Navigator>
    )
}

export default Routes;