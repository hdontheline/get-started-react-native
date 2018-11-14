import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greetings extends Component {
  render () { 
    return ( 
      <View style={{alignItems: 'center', paddingTop: 125}}>
        <Text>Hello {this.props.name}</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render (){
    return (
      <View style={{alignItems: 'center'}}>
        <Greetings name='Brad'/>
        <Greetings name='Ipad'/>
        <Greetings name='Vlad'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);

//Using name as a prop lets us customize the Greeting component, so we can reuse that component for each of our greetings
