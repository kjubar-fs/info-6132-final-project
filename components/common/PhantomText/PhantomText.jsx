import { useState } from "react";
import { Text, View } from "react-native";

const PhantomText = ({text, fontSize = 18, color = "black", displayShadow = true, alignText = "center", style = {}}) => {

    const arrayOfChars = text.split("")

    return(
        <View
         style={{flexDirection: 'row', flexWrap: 'wrap', ...style, justifyContent: alignText,}}>
        {arrayOfChars.map((char, i) => <PhantomChar color={color} fontSize={fontSize} displayShadow={displayShadow} key={i} char={char}/>)}
        </View>
    )
}

const PhantomChar = ({char, color, fontSize, displayShadow}) => {

    // setting the opposite color to use between black & white
    const oppColor = color == "white" ? "black" : "white"
    // an array with all the possible font families to use for the text component
    const fontFamilies = ['Courier', 'Calibri', 'monospace', 'Arial', 'Helvetica', 'sans-serif', 'serif', 'Roboto']

    // defining these properties as state variables to avoid recalculating them on re-render of the parent components
    const [isBlock, setIsBlock] = useState(Math.floor(Math.random()*100) > 90)
    const [fontIndex, setFontIndex] = useState(Math.floor(Math.random()*fontFamilies.length))

    // shared styles between all versions of this component
    const baseStyle = {
        fontWeight: 800,
        fontSize: fontSize,
        padding: 1,
        fontFamily: fontFamilies[fontIndex],
        color: isBlock ? oppColor : color,
        backgroundColor: isBlock? color : "transparent",
    }

    // styles to be applied when the displayShadow property is set to true
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