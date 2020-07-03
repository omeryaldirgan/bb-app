import React from 'react';
import Input from '../components/input';

export default {
  title: 'Input',
};


export const TextInput = () => (
    <Input name='email' type='email' placeholder='E-mail' required />
);
