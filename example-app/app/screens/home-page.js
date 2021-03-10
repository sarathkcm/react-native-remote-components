import React, { useState } from 'react'
import { StyleSheet, Switch, TouchableOpacity, View, ScrollView } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import DynamicComponent from '../components/dynamic-component';
import { addTodo, toggleTodo } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomePage = ({ navigation }) => {
    const [showDynamicComponents, setShowDynamicComponents] = useState(false);
    const [todoText, setTodoText] = useState("");

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const addTodoToStore = () => todoText.trim() && dispatch(addTodo({ title: todoText }));
    const toggleTodoToStore = (id, completed) => dispatch(toggleTodo({ id, completed }));

    const renderDynamicComponentsSwitch = () => (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Toggle remote components</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#79addb" }}
                thumbColor={showDynamicComponents ? "#3480eb" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={setShowDynamicComponents}
                value={showDynamicComponents}
            />
        </View>
    );

    const renderDynamicComponents = () => (
        <>
            {showDynamicComponents && (
                <View style={{ paddingVertical: 15 }}>
                    <DynamicComponent __id="counter" />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flex: 1 }}>
                            <DynamicComponent __id="todo-status" flow="vertical" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <DynamicComponent __id="todo-status2" flow="vertical" />
                        </View>
                    </View>
                    <DynamicComponent __id="next-page-button" />
                </View>
            )}
        </>
    );

    const renderTodoSection = () => (
        <>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Todos</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Input
                    leftIcon={<Icon name="calendar-check" size={20} />}
                    placeholder="Enter Todo"
                    containerStyle={{ flex: 1, marginTop: 8 }}
                    onChangeText={text => setTodoText(text)}
                    value={todoText}
                />
                <Button
                    onPress={() => {
                        addTodoToStore();
                        setTodoText("")
                    }}
                    icon={<Icon name="plus-box" size={20} color="white" />}
                    title=" Add"
                />
            </View>
            <View>
                {todos.map(todo => (
                    <TouchableOpacity
                        key={todo.id}
                        onPress={() => toggleTodoToStore(todo.id, !todo.completed)}
                        style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "baseline", marginVertical: 5 }}
                    >
                        <Icon name={todo.completed ? "checkbox-marked" : "checkbox-blank-outline"} size={20} color="#3480eb" />
                        <Text style={{ marginLeft: 10, fontSize: 15 }}>{todo.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </>
    )
    return (
        <ScrollView style={{ padding: 10, flex: 1 }}>
            {renderTodoSection()}
            {renderDynamicComponentsSwitch()}
            {renderDynamicComponents()}
        </ScrollView>
    )
}

export default HomePage

const styles = StyleSheet.create({})
