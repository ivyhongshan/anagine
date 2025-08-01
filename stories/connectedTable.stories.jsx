import React from 'react';
import { action } from '@storybook/addon-actions';
// import ConnectedFilter from '@gen3/guppy/dist/components/ConnectedFilter';
// import GuppyWrapper from '@gen3/guppy/dist/components/GuppyWrapper';
import ConnectedFilter from '../src/components/ConnectedFilter';
import GuppyWrapper from '../src/components/GuppyWrapper';
import TableExample from './TableExample';
import './guppyWrapper.css';
import { filterConfig, guppyConfig, tableConfig } from './conf';

export default {
  title: 'Guppy Wrapper',
};

export const ConnectedFilterAndTable = () => (
  <div className="guppy-wrapper">
    <GuppyWrapper
      filterConfig={filterConfig}
      guppyConfig={guppyConfig}
      rawDataFields={tableConfig.map((e) => e.field)}
      onFilterChange={action('wrapper receive filter change')}
      onReceiveNewAggsData={action('wrapper receive aggs data')}
    >
      <ConnectedFilter
        className="guppy-wrapper__filter"
        filterConfig={filterConfig}
        guppyConfig={guppyConfig}
      />
      <TableExample className="guppy-wrapper__table" />
    </GuppyWrapper>
  </div>
);

ConnectedFilterAndTable.story = {
  name: 'Connected Filter and Table',
};
