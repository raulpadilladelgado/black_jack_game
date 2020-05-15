import React from 'react';
import { render } from '@testing-library/react';
import Greetings from './greetings';

describe('Grettings',function(){
  it('should rendering component',function(){
    //GIVEN
    const renderResult = render(<Greetings/>);

    //WHEN

    //THEN
    expect(renderResult.queryAllByLabelText('greetings')).toBeTruthy();
  });
});
