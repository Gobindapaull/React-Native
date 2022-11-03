import * as React from 'react';
import { View } from 'react-native';
import { MotiView } from '@motify/components';

const LoadingIndicator = ({size} : { size: number}) => {
    return (
        <MotiView 
        from={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 0,
            shadowOpacity: 0.5
        }}
        animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
            borderWidth: size / 10,
            shadowOpacity: 1
        }}
        transition={{
            type: 'timing',
            duration: 1000,
            repeat: 3,
            // loop: true
        }}
        style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,
            borderColor: '#fff',
            shadowColor: '#fff',
            shadowOffset: {
                width: 0,
                height: 0
            },
            shadowOpacity: 1,
            shadowRadius: 10
        }}/>
    )
}
