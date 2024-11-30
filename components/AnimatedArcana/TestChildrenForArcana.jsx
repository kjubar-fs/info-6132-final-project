import { View, Image } from 'react-native'

export const TestChildrenForArcana = () => {
    return(
        <View style={{
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Image
                source={require('../../assets/takeYourTime.png')}
                style={{
                    marginTop: 100,
                    marginLeft: 100,
                    width: 300,
                    height: 300,
                }}
            />
        </View>
    )
}
