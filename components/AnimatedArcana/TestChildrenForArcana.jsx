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
                source={{uri: "https://megatenwiki.com/images/thumb/b/b3/P3_Orpheus_Artwork.png/599px-P3_Orpheus_Artwork.png"}}
                style={{
                    marginTop: 100,
                    marginLeft: 100,
                    width: 300,
                    height: 400,
                    resizeMode: 'contain',
                }}
            />
        </View>
    )
}
