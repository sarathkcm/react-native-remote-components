import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements';
import TodoStatus from "./todo-status";
import TodoStatus2 from "./todo-status2";

const NewPage = () => {
    const navigation = useNavigation();
    return (
        <View style={{ margin: 10 }}>
            <View style={{ margin: 15 }}>
                <Text>This entire page in navigation is a remote component and it comes with other server components embedded in it as well</Text>
            </View>
            <TodoStatus />
            <TodoStatus2 />
            <View style={{ margin: 15 }}>
                <Button title="Go back" onPress={() => navigation.goBack()}></Button>
            </View>
        </View>
    )
}

export default NewPage

const styles = StyleSheet.create({})
