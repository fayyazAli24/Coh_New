import {getColor} from "@/app/utils/color-utils";
import {ApexOptions} from "ng-apexcharts"

export const basicRangeArea: () => ApexOptions = () => ({
    series: [
        {
            name: 'Acme Corp Stock Price',
            data: [
                {x: 'Jan', y: [112, 132]},
                {x: 'Feb', y: [118, 140]},
                {x: 'Mar', y: [125, 150]},
                {x: 'Apr', y: [130, 155]},
                {x: 'May', y: [128, 162]},
                {x: 'Jun', y: [135, 170]},
                {x: 'Jul', y: [140, 180]},
                {x: 'Aug', y: [138, 178]},
                {x: 'Sep', y: [133, 165]},
                {x: 'Oct', y: [127, 158]},
                {x: 'Nov', y: [122, 150]},
                {x: 'Dec', y: [120, 145]}
            ]
        }
    ],
    colors: [getColor('secondary')],
    chart: {
        height: 350,
        type: 'rangeArea',
        toolbar: {show: false}
    },
    stroke: {
        curve: 'monotoneCubic'
    },
    markers: {
        hover: {
            sizeOffset: 5
        }
    },
    dataLabels: {
        enabled: false
    },
    yaxis: {
        labels: {
            formatter: (val) => {
                return '$' + val.toFixed(0);
            }
        }
    }
})

export const rangeAreaWithLine: () => ApexOptions = () => ({
    series: [
        {
            type: 'rangeArea',
            name: 'Division Y Range',
            data: [
                {x: 'Jan', y: [800, 1300]},
                {x: 'Feb', y: [950, 1250]},
                {x: 'Mar', y: [1000, 1700]},
                {x: 'Apr', y: [1100, 1600]},
                {x: 'May', y: [1600, 2400]},
                {x: 'Jun', y: [700, 1200]},
                {x: 'Jul', y: [1500, 1800]},
                {x: 'Aug', y: [900, 1400]}
            ]
        },
        {
            type: 'rangeArea',
            name: 'Division X Range',
            data: [
                {x: 'Jan', y: [2400, 2800]},
                {x: 'Feb', y: [3000, 3600]},
                {x: 'Mar', y: [2700, 3400]},
                {x: 'Apr', y: [2900, 3200]},
                {x: 'May', y: [3900, 4600]},
                {x: 'Jun', y: [4200, 5000]},
                {x: 'Jul', y: [3800, 4200]},
                {x: 'Aug', y: [2000, 2700]}
            ]
        },
        {
            type: 'line',
            name: 'Division Y Median',
            data: [
                {x: 'Jan', y: 1050},
                {x: 'Feb', y: 1100},
                {x: 'Mar', y: 1350},
                {x: 'Apr', y: 1350},
                {x: 'May', y: 2000},
                {x: 'Jun', y: 1000},
                {x: 'Jul', y: 1650},
                {x: 'Aug', y: 1150},
                {x: 'Sep', y: 1250},
                {x: 'Oct', y: 1350}
            ]
        },
        {
            type: 'line',
            name: 'Division X Median',
            data: [
                {x: 'Jan', y: 2600},
                {x: 'Feb', y: 3300},
                {x: 'Mar', y: 3050},
                {x: 'Apr', y: 3050},
                {x: 'May', y: 4250},
                {x: 'Jun', y: 4700},
                {x: 'Jul', y: 4000},
                {x: 'Aug', y: 2350},
                {x: 'Sep', y: 2100},
                {x: 'Oct', y: 1900}
            ]
        }
    ],
    chart: {
        height: 350,
        type: 'rangeArea',
        animations: {
            speed: 500
        },
        toolbar: {show: false}
    },
    colors: [getColor('danger'), getColor('success')],
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: [0.24, 0.24, 1, 1]
    },
    forecastDataPoints: {
        count: 2
    },
    stroke: {
        curve: 'straight',
        width: [0, 0, 2, 2]
    },
    legend: {
        show: true,
        customLegendItems: ['Division Y', 'Division X'],
        inverseOrder: true
    },
    markers: {
        hover: {
            sizeOffset: 5
        }
    }
})
