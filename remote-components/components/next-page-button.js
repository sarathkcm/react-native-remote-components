import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, Card, Text } from 'react-native-elements'
import Icons from "react-native-vector-icons";

const NextPageButton = () => {
    const navigation = useNavigation();
    return (
        <Card>
            <View>
                <Button
                    title=" Go to Next Page"
                    onPress={() => navigation.navigate("NewPage")}
                    icon={<Icons.MaterialCommunityIcons name="arrow-right-bold-circle" size={20} color="white" />} />
                <Text style={{ textAlign: "center" }}>This component uses navigation hooks.</Text>
            </View>
        </Card>
    )
}

export default NextPageButton

const styles = StyleSheet.create({})
