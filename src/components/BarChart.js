import React from 'react';
import { Doughnut, Bar,Line } from 'react-chartjs-2';

export const NetworVisitsPMR = () => {
    return (
        <Doughnut
            data={{
                labels: ['Grand Total', 'Planned', 'Emergency'],
                datasets: [{
                    data: ['5098', '2576', '2522'],
                    backgroundColor: ['#FF8C00', 'green', 'red'],
                    hoverBackgroundColor: ['#FFA500', 'lightgreen', '#FF7F7F']
                }]
            }}
            options={{
                title: {
                    display: true,
                    text: `NetworK Visits PMR`
                }

            }}
        />
    )
}
export const Zones = () => {
    return (
        <Bar
            data={{
                labels: ['Centeral', 'Notrh', 'South', 'Grand Total'],
                datasets: [
                    {
                        label: 'Emergency',
                        backgroundColor: '#FF8C00',
                        borderColor: '#FF8C00',
                        borderWidth: 1,
                        hoverBackgroundColor: '#FFA500',
                        hoverBorderColor: '#FFA500',
                        data: [633, 362, 1527, 2522],
                    },
                    {
                        label: 'Planned',
                        backgroundColor: 'green',
                        borderColor: 'green',
                        borderWidth: 1,
                        hoverBackgroundColor: 'lightgreen',
                        hoverBorderColor: 'lightgreen',
                        data: [653, 357, 1566, 2576]
                    },

                ]
            }}
            options={{
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                },
                title: {
                    display: true,
                    text: `Network Visits PMR`
                }

            }}
        />
    )
}

export const ShowZones = () => {
    return (
        <Bar
        data={{
            labels: ['CTR','FTR','GTR','LTR','MTR'],
            datasets: [
                {
                    label: 'Emergency',
                    backgroundColor: '#FF8C00',
                    borderColor: '#FF8C00',
                    borderWidth: 1,
                    hoverBackgroundColor: '#FFA500',
                    hoverBorderColor: '#FFA500',
                    data: [[51,102,], 362, 1527, 2522],
                },
                {
                    label: 'Planned',
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderWidth: 1,
                    hoverBackgroundColor: 'lightgreen',
                    hoverBorderColor: 'lightgreen',
                    data: [653, 357, 1566, 2576]
                },

            ]
        }}
        options={{
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            },
            title: {
                display: true,
                text: `Network Visits PMR`
            }

        }}
        />
    )
}

