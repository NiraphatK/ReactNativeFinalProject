import { StyleSheet, Text, View } from 'react-native'
import { Svg, G, Circle, CircleProps } from 'react-native-svg'
import React, { useEffect, useState } from 'react'
import Animated, { useAnimatedProps, useSharedValue, withTiming, AnimatedProps, Easing, useAnimatedStyle } from 'react-native-reanimated'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

type PropType = {
    timing: number
    onTimeOut: Function
    setTimeDown: (remainingTime: number) => void
    onStart:boolean
}

const CIRCUMFERENCE = 700
const RADIUS = CIRCUMFERENCE / (2 * Math.PI)
const STROKE_WIDTH = 10
const HALF_CIRCLE = RADIUS + STROKE_WIDTH
const DIAMETER = HALF_CIRCLE * 2

const LoadingForReact: React.FC<PropType> = ({ timing, onTimeOut, setTimeDown ,onStart}): React.JSX.Element => {
    const progress = useSharedValue(0)
    const rotateZ = useSharedValue(0)
    const [time, setTime] = useState(timing * 60)
    const [onActive, setOnActive] = useState<boolean>(onStart)

    useEffect(() => {
        
            console.log(onActive);
            console.log(onStart);
            
            progress.value = withTiming(1, { duration: (timing * 60 * 1000) + 1000, easing: Easing.linear, })
            rotateZ.value = withTiming(360, { duration: (timing * 60 * 1000) + 1000, easing: Easing.linear })

            const interval = setInterval(() => {
                setTime(prev => {
                    if (prev <= 0) {
                        clearInterval(interval)
                        onTimeOut(prev)
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)

            return () => clearInterval(interval)
        
    }, [onStart])

    useEffect(() => {
        setTimeDown(time)
    }, [time])

    const animatedProps = useAnimatedProps<AnimatedProps<CircleProps>>(() => {
        return {
            strokeDashoffset: CIRCUMFERENCE * (1 - progress.value)
        }
    }, [progress.value])

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotateZ.value}deg` }],
        };
    }, [rotateZ.value]);

    const formattedTime = `${Math.floor(time / 60).toString().padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ position: 'absolute', zIndex: 10 }}>
                <Animated.View style={[styles.Circle, rStyle]} >
                    <View style={styles.miniCircle}></View>
                </Animated.View>
            </View>
            <Svg width={DIAMETER} height={DIAMETER} viewBox={`0 0 ${DIAMETER} ${DIAMETER}`} style={{ zIndex: 1 }} >
                <G origin={`${HALF_CIRCLE},${HALF_CIRCLE}`} rotation={'-90'} >
                    <AnimatedCircle
                        animatedProps={animatedProps}
                        fill={'transparent'}
                        stroke={'#6484DC'}
                        r={RADIUS}
                        cx={'50%'}
                        cy={'50%'}
                        strokeWidth={STROKE_WIDTH}
                        strokeLinecap='round'
                        strokeDasharray={CIRCUMFERENCE}
                    />
                    <Circle
                        fill={'transparent'}
                        stroke={'#98CCF9'}
                        r={RADIUS}
                        cx={'50%'}
                        cy={'50%'}
                        strokeWidth={STROKE_WIDTH}
                        strokeLinecap='round'
                        strokeDasharray={CIRCUMFERENCE}
                        strokeOpacity={0.5}
                    />
                </G>
            </Svg>
            <Text style={styles.timerText}>{formattedTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    timerText: {
        fontSize: 24,
        fontWeight: 'bold',
        position: 'absolute',
        color: 'black'
    },
    Circle: {
        position: 'relative',
        width: DIAMETER,
        height: DIAMETER,
        backgroundColor: 'transparent',
        borderRadius: DIAMETER
    },
    miniCircle: {
        position: 'absolute',
        top: -2,
        right: '46%',
        width: 25,
        height: 25,
        backgroundColor: '#4C62A4',
        borderRadius: 20,
    }
})

export default LoadingForReact
