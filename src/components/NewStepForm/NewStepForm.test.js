import React from 'react';
import {shallow} from 'enzyme';
import NewStepForm from './NewStepForm';

describe('NewStepForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NewStepForm />)
  });

  it('should render', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });
});