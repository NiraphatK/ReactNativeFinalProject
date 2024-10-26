import { View, Text, useWindowDimensions } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import {LineChartData} from 'react-native-chart-kit/dist/line-chart/LineChart';
import React from 'react';

interface typeBook {
    Studying: number,
    Cartoon: number,
    Novel: number,
    Others: number,
}
 

const BarChartDemo = ({focusedPerType}:{focusedPerType:typeBook}): React.JSX.Element => {
    const { width } = useWindowDimensions();

    const barCharData: LineChartData = {
        labels:['Studying', 'Cartoon', 'Novel', 'Others'],
        datasets:[
         {
             data:[focusedPerType.Studying, focusedPerType.Cartoon, focusedPerType.Novel, focusedPerType.Others],
             colors:[(opacity=1)=> '#98CCF9',(opacity=1)=> '#9AAEF3',(opacity=1)=> '#7285CA',
             (opacity=1)=> '#6483DA'
         ]
         }
        ],
     }

    return (
        <View>
            <BarChart
                data={barCharData}
                width={width - 100}
                yAxisSuffix=' min'
                height={180}
                yAxisLabel=""
                chartConfig={{
                    backgroundGradientFrom: '#E4E6ED',
                    backgroundGradientTo: '#E4E6ED',
                    color: () => `black`,
                    barPercentage: 0.9,
                    useShadowColorFromDataset: false, // optional
                    decimalPlaces: 0,
                }}
                withInnerLines={false}
                showValuesOnTopOfBars
                showBarTops={false}
                withCustomBarColorFromData
                flatColor
                fromZero={true}
            />
        </View>
    )
}

export default BarChartDemo;