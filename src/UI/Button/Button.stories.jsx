import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const PrimaryButton = () => <Button variant={'primary'}>click</Button>;
export const SecondaryButton = () => <Button variant={'secondary'}>click</Button>;
export const DangerButton = () => <Button variant={'danger'}>click</Button>;

// jei nori sukurti papildomu argumentu tam mygtukui, bet nenori
// prideti ju visiems btn

const Template = (args) => <Button {...args} />;

export const SecondaryButtonArgs = Template.bind({});
SecondaryButtonArgs.args = {
  variant: 'secondary',
  children: 'Click meee arg',
};
export const PrimaryButtonArgs = Template.bind({});
PrimaryButtonArgs.args = {
  variant: 'primary',
  children: 'Click meee arg',
};
