import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

class PlaceInput extends Component{
    state = {
        placeName: ''
    }

    placeNameChangedHandler = (val) => {
        this.setState({placeName: val})
    }

    render(){
        return(
            <DefaultInput
                placeholder='Place Name'
                value = {this.state.placeName}
                onChangeText = {this.placeNameChangedHandler}
            />
        )
    }
}

export default PlaceInput;

// import React, {Component} from 'react'
// import {View, TextInput, Button, StyleSheet} from 'react-native'

// class PlaceInput extends Component{
//     state = {
//         placeName: ''
//     }

//     placeNameChangedHandler = (val) => {
//         this.setState({placeName: val})
//     }

//     render(){
//         return(
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     placeholder = 'An Awesome Place'
//                     onChangeText = {this.placeNameChangedHandler}
//                     style={styles.placeInput}
//                 />
//                 <Button
//                     style={styles.Button} title='Add'
//                     onPress={() => {this.props.onPlaceAdded(this.state.placeName)}}
//                 />
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     inputContainer: {
//         width: '100%',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     },
//     placeInput: {
//         width: '70%'
//     },
//     placeButton: {
//         width:'30%'
//     }
// })

// export default PlaceInput;