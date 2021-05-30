/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
 import PropTypes from 'prop-types';
 
 class RewardsList extends React.Component {
     static propTypes = {
         rewards: PropTypes.array.isRequired,
     }
   render(){
     return (
       <View style={styles.list}>
           <FlatList
                    data={this.props.rewards}
                    renderItem={({item}) => 
                    <View>
                        <Text>{item.name}</Text>
                        { item.amount != null ? <Button title="Collect reward!" /> : <Text>There is no rewards</Text>} 
                    </View> 
            }/>
     </View>
   );
   }
 };

 const styles = StyleSheet.create({
    list: {
      backgroundColor: '#eee',
      flex: 1,
      width: '100%',
      paddingTop: 50,
    },
    header: {
      fontSize: 40,
      fontWeight: '600',
    },
    text: {
      fontSize: 18,
      fontWeight: '600',
    },
  });
  
 export default RewardsList;
 