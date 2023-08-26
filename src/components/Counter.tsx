import { View, Text } from "react-native";
import { useAppSelector } from "../app/hooks";


const Counter = () => {

    const counter = useAppSelector(state => state.counter.value )
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize:30, fontWeight: 'bold' }}>Counter</Text>
            <Text style={{ fontSize:60, color: 'green', fontWeight: 'bold' }}>{counter}</Text>
        </View>
    )
}

export default Counter