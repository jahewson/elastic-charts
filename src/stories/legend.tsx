import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  AreaSeries,
  Axis,
  BarSeries,
  Chart,
  getAxisId,
  getGroupId,
  getSpecId,
  Position,
  Rotation,
  ScaleType,
  Settings,
} from '..';
import * as TestDatasets from '../lib/series/utils/test_dataset';
import { LineSeries } from '../specs';
import './stories.scss';

storiesOf('Legend', module)
  .add('right', () => {
    return (
      <Chart renderer="canvas" size={[500, 300]}>
        <Settings
          showLegend={true}
          legendPosition={Position.Right}
        />
        <Axis
          id={getAxisId('bottom')}
          position={Position.Bottom}
          title={'Bottom axis'}
          showOverlappingTicks={true}
        />
        <Axis
          id={getAxisId('left2')}
          title={'Left axis'}
          position={Position.Left}
          tickFormat={(d) => Number(d).toFixed(2)}
        />

        <BarSeries
          id={getSpecId('bars')}
          xScaleType={ScaleType.Linear}
          yScaleType={ScaleType.Linear}
          xAccessor="x"
          yAccessors={['y1', 'y2']}
          splitSeriesAccessors={['g1', 'g2']}
          data = {TestDatasets.BARCHART_2Y2G}
          yScaleToDataExtent ={false}
        />
    </Chart>);
  })
  .add('bottom', () => {
    return (
      <Chart renderer="canvas" size={[500, 300]}>
        <Settings
          showLegend={true}
          legendPosition={Position.Bottom}
        />
        <Axis
          id={getAxisId('bottom')}
          position={Position.Bottom}
          title={'Bottom axis'}
          showOverlappingTicks={true}
        />
        <Axis
          id={getAxisId('left2')}
          title={'Left axis'}
          position={Position.Left}
          tickFormat={(d) => Number(d).toFixed(2)}
        />

        <BarSeries
          id={getSpecId('bars')}
          xScaleType={ScaleType.Linear}
          yScaleType={ScaleType.Linear}
          xAccessor="x"
          yAccessors={['y1', 'y2']}
          splitSeriesAccessors={['g1', 'g2']}
          data = {TestDatasets.BARCHART_2Y2G}
          yScaleToDataExtent ={false}
        />
    </Chart>);
  })
  .add('left', () => {
    return (
      <Chart renderer="canvas" size={[500, 150]}>
        <Settings
          showLegend={true}
          legendPosition={Position.Left}
        />
        <Axis
          id={getAxisId('bottom')}
          position={Position.Bottom}
          title={'Bottom axis'}
          showOverlappingTicks={true}
        />
        <Axis
          id={getAxisId('left2')}
          title={'Left axis'}
          position={Position.Left}
          tickFormat={(d) => Number(d).toFixed(2)}
        />

        <BarSeries
          id={getSpecId('bars')}
          xScaleType={ScaleType.Linear}
          yScaleType={ScaleType.Linear}
          xAccessor="x"
          yAccessors={['y1', 'y2']}
          splitSeriesAccessors={['g1', 'g2']}
          data = {TestDatasets.BARCHART_2Y2G}
          yScaleToDataExtent ={false}
        />
    </Chart>);
  })
  .add('top', () => {
    return (
      <Chart renderer="canvas" size={[500, 300]}>
        <Settings
          showLegend={true}
          legendPosition={Position.Top}
        />
        <Axis
          id={getAxisId('bottom')}
          position={Position.Bottom}
          title={'Bottom axis'}
          showOverlappingTicks={true}
        />
        <Axis
          id={getAxisId('left2')}
          title={'Left axis'}
          position={Position.Left}
          tickFormat={(d) => Number(d).toFixed(2)}
        />

        <BarSeries
          id={getSpecId('bars')}
          xScaleType={ScaleType.Linear}
          yScaleType={ScaleType.Linear}
          xAccessor="x"
          yAccessors={['y1', 'y2']}
          splitSeriesAccessors={['g1', 'g2']}
          data = {TestDatasets.BARCHART_2Y2G}
          yScaleToDataExtent ={false}
        />
    </Chart>);
  });
