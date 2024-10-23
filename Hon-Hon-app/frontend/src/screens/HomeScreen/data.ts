import {ChartData} from 'react-native-chart-kit/dist/HelperTypes';
import {LineChartData} from 'react-native-chart-kit/dist/line-chart/LineChart';
import {StackedBarChartData} from 'react-native-chart-kit/dist/StackedBarChart';

export const barCharData: LineChartData = {
   labels:['Studying', 'Cartoon', 'Novel', 'Others'],
   datasets:[
    {
        data:[5, 7, 3, 9],
        colors:[(opacity=1)=> '#98CCF9',(opacity=1)=> '#9AAEF3',(opacity=1)=> '#7285CA',
        (opacity=1)=> '#6483DA'
    ]
    }
   ],
}
