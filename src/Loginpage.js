    

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,  
} from "@aws-amplify/ui-react";
import Building from "./components/Buildings/Building";

function LoginPage({ signOut }) {  
  return (
    <View className="App">
      <Card>
        <Building/>
      <Button onClick={signOut} style={{"float": "right", "margin-right" : "20px", "background-color": "#61ae34", "color":'white',"margin-top":"80px"}}>Sign Out</Button>
    
        <Heading level={1}> we now have Auth </Heading>
        </Card>     
           
    </View>
  );
}

export default withAuthenticator(LoginPage);