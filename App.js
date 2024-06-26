import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Welcome ,HomeScreen, ChatComponent,Cfcal } from "./screens";
import useAuth from './hooks/useAuth';

const Stack = createNativeStackNavigator();

export default function App() {
  const {user} =useAuth();
  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
        >
          
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="ChatComponent"
            component={ChatComponent}
            options={{
              headerShown: false
            }}
            
          />
          <Stack.Screen
            name="Cfcal"
            component={Cfcal}
            options={{
              headerShown: false
            }}
            
          />
        </Stack.Navigator>
      </NavigationContainer>
  
    );
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Welcome'
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false
            }}
          />
          {/* <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="ChatComponent"
            component={ChatComponent}
            options={{
              headerShown: false
            }}
            
          />
          <Stack.Screen
            name="Cfcal"
            component={Cfcal}
            options={{
              headerShown: false
            }}
            
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
  
    );
  }
  
}