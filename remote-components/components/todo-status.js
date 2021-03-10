import React from 'react'
import { View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';

const Status = ({ flow }) => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return (
        <Card>
            <View style={{ flexDirection: flow !== "vertical" ? "row" : "column", justifyContent: "space-between", alignItems: "center", marginVertical: 20 }}>
                <View>
                    <Text>• There are {todos.length} Todos</Text>
                    <Text>• Completed {todos.filter(a => a.completed).length} Todos</Text>
                    <Text>• Using redux hooks</Text>
                </View>
                {flow === "vertical" && <View style={{ height: 15 }}></View>}
                <Button title="Mark All as completed" onPress={() => {
                    for (const todo of todos) {
                        dispatch({
                            type: "store/toggle-todo",
                            payload: { id: todo.id, completed: true }
                        })
                    }

                }}></Button>
            </View>
        </Card>
    )
}

export default Status
