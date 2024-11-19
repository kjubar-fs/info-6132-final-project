import { Text, View } from "react-native";

const PhantomText = ({text, fontSize = 18, color = "black", displayShadow = true, style = {}}) => {

    const arrayOfChars = text.split("")

    return(
        <View
         style={{flexDirection: 'row', flexWrap: 'wrap', ...style}}>
        {arrayOfChars.map(char => <PhantomChar color={color} fontSize={fontSize} displayShadow={displayShadow} key={char+Math.random()} char={char}/>)}
        </View>
    )
}

const PhantomChar = ({char, color, fontSize, displayShadow}) => {
    const oppColor = color == "white" ? "black" : "white"
    const fontFamilies = ['Courier', 'Calibri', 'monospace', 'Arial', 'Helvetica', 'sans-serif', 'serif', 'Roboto']
    const isBlock = Math.floor(Math.random()*100) > 90
    const fontIndex = Math.floor(Math.random()*fontFamilies.length)

    const baseStyle = {
        fontWeight: 800,
        fontSize: fontSize,
        padding: 1,
        fontFamily: fontFamilies[fontIndex],
        color: isBlock ? oppColor : color,
        backgroundColor: isBlock? color: "",
    }
    const shadowStyle = {
        textShadowOffset: isBlock ? {} : {width: -1, height: -1},
        textShadowColor: oppColor,
        textShadowRadius: isBlock ? 0 : 1,
    }


    if(char == " "){
        return <Text>{char}</Text>
    }

    return(
        <Text
            style={
                displayShadow ? {...baseStyle, ...shadowStyle} : {...baseStyle}
            }
        >
            {char}
        </Text>
    )
}

export default PhantomText