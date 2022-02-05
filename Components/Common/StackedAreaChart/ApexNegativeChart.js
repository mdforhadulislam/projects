import React from 'react';

import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
class ApexNegativeChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: 'Earning',
                    data: [
                        1000, 650, 760, 880, 150, 210, 290, 380, 390, 420, 400, 430, 410, 420, 450,
                        390, 500, 300
                    ]
                },
                {
                    name: 'Expenses',
                    data: [
                        -800, -105, -260, -118, -140, -220, -285, -370, -396, -422, -430, -440,
                        -410, -400, -410, -340, -310, -280
                    ]
                }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 440,
                    stacked: true,
                    toolbar: { show: false }
                },

                colors: ['rgb(136, 126, 242)', 'rgb(255, 173, 95)'],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        barHeight: '80%',
                        columnWidth: '40%'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right'
                },

                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                yaxis: {
                    min: -1500,
                    max: 1500,
                    title: {
                        // text: 'Age',
                    }
                },
                tooltip: {
                    shared: false,
                    x: {
                        formatter: function (val) {
                            return val;
                        }
                    },
                    y: {
                        formatter: function (val) {
                            return Math.abs(val) + '%';
                        }
                    }
                },

                xaxis: {
                    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    title: {
                        text: 'Percent'
                    },
                    labels: {
                        formatter: function (val) {
                            return Math.abs(Math.round(val));
                        }
                    }
                }
            }
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height={480}
                />
            </div>
        );
    }
}
export default ApexNegativeChart;
