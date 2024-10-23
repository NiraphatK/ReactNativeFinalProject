import { View, Text, useWindowDimensions } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { barCharData } from './data';
import React from 'react';

const BarChartDemo = (): React.JSX.Element => {
    const { width } = useWindowDimensions();
    return (
        <View>
            <BarChart
                data={barCharData}
                width={width - 100}
                yAxisSuffix=' min'
                height={180}
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