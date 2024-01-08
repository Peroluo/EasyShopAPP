import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { DatePicker, Select } from 'antd';
import { Card } from '@/src/components';
import { useEchart } from '@/src/hooks';
export const TrafficDayLine = () => {
  const { ref, setOption } = useEchart();
  useEffect(() => {
    if(ref.current){
      const option = {
        grid: {
          top: 40,
          left: 0,
          right: 0,
          bottom: 0,
          containLabel: true,
        },
        legend: {
          data: ['PV', 'UV', 'IP'],
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999',
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ['10-24', '10-23', '10-32', '10-32', '10-32', '10-32', '10-32'],
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 250,
            // interval: 50,
            axisLabel: {
              formatter: '{value}',
            },
          },
        ],
        series: [
          {
            name: 'PV',
            type: 'line',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(58,77,233,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(58,77,233,0.3)',
                },
              ]),
            },
            tooltip: {
              valueFormatter: function(value) {
                return `${value }`;
              },
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
          {
            name: 'UV',
            type: 'line',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(58,77,233,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(58,77,233,0.3)',
                },
              ]),
            },
            tooltip: {
              valueFormatter: function(value) {
                return `${value }`;
              },
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
          {
            name: 'IP',
            type: 'line',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(58,77,233,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(58,77,233,0.3)',
                },
              ]),
            },
            tooltip: {
              valueFormatter: function(value) {
                return `${value }`;
              },
            },
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
        ],
      };
      setOption(option);
    }
  }, [ref.current]);
  return (
    <Card
      title="流量每日走势"
      prefixHeadRight={
        <>
          <Select style={{ minWidth: 100, marginRight: 10 }}>
            <Select.Option value="/path">/path</Select.Option>
          </Select>
          <DatePicker.RangePicker />
        </>
      }
    >
      <div
        style={{ height: 300 }}
        ref={ref} />
    </Card>
  );
};
