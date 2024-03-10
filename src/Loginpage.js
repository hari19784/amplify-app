import logo from "./logo.svg";
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
      {/* <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}> we now have Auth </Heading>
        </Card>      */}
      <Button onClick={signOut} style={{"float": "right", "margin-right" : "20px", "background-color": "#61ae34", "color":'white'}}>Sign Out</Button>
      <Building />
    </View>
  );
}

export default withAuthenticator(LoginPage);