import React from 'react'
import { View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import { connect } from 'react-redux';

const Status = ({ todos, markCompleted, children, flow }) => {
    console.log("children", children)
    return (
        <Card>
            <View style={{ flexDirection: flow !== "vertical" ? "row" : "column", justifyContent: "space-between", alignItems: "center", marginVertical: 20 }}>
                <View>
                    <Text>• There are {todos.length} Todos</Text>
                    <Text>• Completed {todos.filter(a => a.completed).length} Todos</Text>
                    <Text>• Using connect()</Text>
                </View>
                {flow === "vertical" && <View style={{ height: 15 }}></View>}
                <Button title="Mark All as to be done" onPress={() => {
                    for (const todo of todos) {
                        markCompleted(todo.id)
                    }
                }}></Button>
                {children}
            </View >
        </Card>
    )
}

export default connect(
    state => ({ todos: state.todos }),
    dispatch => ({
        markCompleted: (id) => dispatch({
            type: "store/toggle-todo",
            payload: { id: id, completed: false }
        })
    })
)(Status)
