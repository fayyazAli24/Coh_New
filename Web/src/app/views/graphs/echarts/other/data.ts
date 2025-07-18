import {getColor} from "@/app/utils/color-utils";
import {EChartsOption} from "echarts";
import {echarts} from '@/app/config/echarts-config';

let category = [];
let dottedBase = +new Date();
let lineData = [];
let barData = [];
for (let i = 0; i < 20; i++) {
    let date = new Date((dottedBase += 3600 * 24 * 1000));
    category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
    let b = Math.random() * 200;
    let d = Math.random() * 200;
    barData.push(b);
    lineData.push(d + b);
}
export const dottedChart = (): EChartsOption => ({
    backgroundColor: '#1e1f27', tooltip: {
        trigger: 'axis',
        padding: [8, 15],
        backgroundColor: getColor("secondary-bg"),
        borderColor: getColor("border-color"),
        textStyle: {color: getColor("light-text-emphasis")},
        borderWidth: 1,
        transitionDuration: 0.125,
        axisPointer: {type: "none"},
        shadowBlur: 2,
        shadowColor: "rgba(76, 76, 92, 0.15)",
        shadowOffsetX: 0,
        shadowOffsetY: 1,
    }, legend: {
        data: ['Apple', 'Samsung'], top: 15, textStyle: {
            color: '#aab8c5'
        }
    }, textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    }, xAxis: {
        data: category, axisLine: {
            lineStyle: {
                type: 'dashed', color: "#3a3d4e"
            }
        }, axisLabel: {
            show: true, color: "#595e7a"
        }, splitLine: {
            lineStyle: {
                color: "#3a3d4e", type: 'dashed'
            }
        }
    }, yAxis: {
        axisLine: {
            lineStyle: {
                type: 'dashed', color: "#3a3d4e"
            }
        }, axisLabel: {
            show: true, color: "#595e7a"
        }, splitLine: {
            show: false, lineStyle: {
                color: "#3a3d4e", type: 'dashed'
            }
        }
    }, grid: {
        left: 25, right: 25, bottom: 25, top: 60, containLabel: true
    }, series: [{
        name: 'Apple', type: 'line', smooth: true, itemStyle: {
            color: getColor("purple")
        }, showAllSymbol: true, symbol: 'emptyCircle', symbolSize: 15, data: lineData
    }, {
        name: 'Samsung', type: 'bar', barWidth: 10, itemStyle: {
            borderRadius: [5, 5, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: getColor("primary")}, {
                offset: 1,
                color: getColor("danger"),
            }])
        }, data: barData
    }, {
        name: 'iPhone', type: 'bar', barGap: '-100%', barWidth: 10, itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(20,200,212,0.5)'
            }, {offset: 0.2, color: 'rgba(20,200,212,0.2)'}, {offset: 1, color: 'rgba(20,200,212,0)'}])
        }, z: -12, data: lineData
    }, {
        name: 'Dotted', type: 'pictorialBar', symbol: 'rect', itemStyle: {
            color: '#0f375f'
        }, symbolRepeat: true, symbolSize: [12, 4], symbolMargin: 1, z: -10, data: lineData
    }]
})

const data = [{
    name: 'Grandpa', itemStyle: {color: '#4ecdc4'}, children: [{
        name: 'Uncle Leo', value: 15, itemStyle: {color: '#ff6b6b'}, children: [{
            name: 'Cousin Jack', value: 2, itemStyle: {color: '#ffe66d'}
        }, {
            name: 'Cousin Mary', value: 5, itemStyle: {color: '#ff9f1c'}, children: [{
                name: 'Jackson', value: 2, itemStyle: {color: '#1a535c'}
            }]
        }, {
            name: 'Cousin Ben', value: 4, itemStyle: {color: '#a29bfe'}
        }]
    }, {
        name: 'Father', value: 10, itemStyle: {color: '#6c5ce7'}, children: [{
            name: 'Me', value: 5, itemStyle: {color: '#00b894'}
        }, {
            name: 'Brother Peter', value: 1, itemStyle: {color: '#fab1a0'}
        }]
    }]
}, {
    name: 'Nancy', itemStyle: {color: '#fd79a8'}, children: [{
        name: 'Uncle Nike', itemStyle: {color: '#ffeaa7'}, children: [{
            name: 'Cousin Betty', value: 1, itemStyle: {color: '#74b9ff'}
        }, {
            name: 'Cousin Jenny', value: 2, itemStyle: {color: '#e17055'}
        }]
    }]
}];

export const subburstChart = (): EChartsOption => ({
    series: {
        type: 'sunburst', data: data, radius: [0, '90%'], label: {
            rotate: 'radial'
        }
    }
})

export const pieChart = (): EChartsOption => ({
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        padding: [8, 15],
        backgroundColor: getColor("secondary-bg"),
        borderColor: getColor("border-color"),
        textStyle: {color: getColor("light-text-emphasis")},
        borderWidth: 1,
        transitionDuration: 0.125,
        axisPointer: {type: "none"},
        shadowBlur: 2,
        shadowColor: "rgba(76, 76, 92, 0.15)",
        shadowOffsetX: 0,
        shadowOffsetY: 1,
    },
    legend: {
        data: ['Direct', 'Marketing', 'Search Engine', 'Email', 'Union Ads', 'Video Ads', 'Baidu', 'Google', 'Bing', 'Others'],
        textStyle: { //The style of the legend text
            color: getColor('body-color')
        }
    }, textStyle: {
        fontFamily: getComputedStyle(document.body).fontFamily
    },
    series: [{
        name: 'Access From',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
            position: 'inner', fontSize: 12, color: "#ffffff"
        },
        labelLine: {
            show: false
        },
        data: [{value: 1548, name: 'Search Engine'}, {value: 775, name: 'Direct'}, {
            value: 679,
            name: 'Marketing',
            selected: true
        }]
    }, {
        name: 'Access From',
        type: 'pie',
        radius: ['45%', '60%'],
        labelLine: {
            length: 30
        },
        label: {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: getColor("secondary-bg"),
            borderColor: getColor('border-color'),
            borderWidth: 1,
            borderRadius: 4,
            rich: {
                a: {
                    color: getColor('body-color'), lineHeight: 22, align: 'center'
                },
                hr: {
                    borderColor: getColor('border-color'), width: '100%', borderWidth: 1, height: 0
                },
                b: {
                    color: getColor('body-color'), fontSize: 12, fontWeight: 600, lineHeight: 33
                },
                per: {
                    color: '#fff', backgroundColor: '#4C5058', padding: [3, 4], borderRadius: 4
                }
            }
        },

        data: [{value: 1048, name: 'Baidu', itemStyle: {color: getColor('primary')}}, {
            value: 335,
            name: 'Direct',
            itemStyle: {color: getColor('secondary')}
        }, {value: 310, name: 'Email', itemStyle: {color: getColor('info')}}, {
            value: 251,
            name: 'Google',
            itemStyle: {color: getColor('warning')}
        }, {value: 234, name: 'Union Ads', itemStyle: {color: getColor('danger')}}, {
            value: 147,
            name: 'Bing',
            itemStyle: {color: getColor('purple')}
        }, {value: 135, name: 'Video Ads', itemStyle: {color: getColor('dark')}}, {
            value: 102,
            name: 'Others',
            itemStyle: {color: getColor('body-color')}
        },]
    }]
})
