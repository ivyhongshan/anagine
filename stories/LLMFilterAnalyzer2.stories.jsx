import React from 'react';
import LLMFilterAnalyzer from '../src/components/LLM/LLMFilterAnalyzer2';
import { filterConfig, guppyConfig, fieldMapping } from './conf';

export default {
  title: 'LLM/LLMFilterAnalyzer2',
  component: LLMFilterAnalyzer,
};

const Template = (args) => <LLMFilterAnalyzer {...args} />;

export const Default = Template.bind({});
Default.args = {
  filterConfig,
  guppyConfig,
  fieldMapping,
};
