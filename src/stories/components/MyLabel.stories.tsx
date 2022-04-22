import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

// Name of the component to render
export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    // Modify the type of the input (text, boolean, select, radio, color, etc.)
    color: {control: 'select', options: ['primary', 'secondary', 'tertiary']},
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args } />

// Stories for the component
export const Basic = Template.bind({});
// Set props for this story
Basic.args = {
  label: 'My Label Custom Basic'
}

export const AllCaps = Template.bind({});
// Set props for this story
AllCaps.args = {
  label: 'My Label Custom AllCaps',
  allCaps: true,
  size: 'normal'
}

export const Secondary = Template.bind({});
// Set props for this story
Secondary.args = {
  label: 'My Label Custom Secondary',
  color: 'secondary',
  size: 'h2'
}

export const Tertiary = Template.bind({});
// Set props for this story
Tertiary.args = {
  label: 'My Label Custom Tertiary',
  color: 'tertiary',
  size: 'h3',
  backgroundColor: '#000000'
}
