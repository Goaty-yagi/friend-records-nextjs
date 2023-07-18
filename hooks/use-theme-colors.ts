import { useState } from "react";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";



type state = 'bg' | 'button' | 'minus-text' | 'plus-text' | 'opposite'

export default function useThemeColors(state?: state):any {
    
    let light = '#ffffff'
    let dark = '#2d3748'

    function setDefault() {
        light = '#ffffff'
        dark = '#2d3748'
    }

    switch (state) {
        case 'bg':
            light = 'linear-gradient(to bottom, green, pink)'
            dark = 'linear-gradient(to bottom, #141e30, #243b55)'
            break
        case 'opposite' :
            light = '#2d3748'
            dark =  '#ffffff'
            break
        case 'minus-text' :
            light = '#ff2d2d'
            dark =  '#ff9393'
            break
        case 'plus-text' :
            light = '#24e0e4'
            dark =  '#c0fafb'
            break
        default:
            break
    }
    const theme = useColorModeValue(
        light,
        dark,
    );
    return {
        theme
    }
}

// const theme = useThemeColors() => return default useColorModeValue Obj

// const theme = useThemeColors(state) => return the state obj
// theme() =>  return default useColorModeValue Obj