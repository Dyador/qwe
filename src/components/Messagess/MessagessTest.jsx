import React from 'react'
import {create} from 'react-test-render'

describe('Messages component test', ()=>{
  
    test('renders learn react link', () => {
   const component = create(<button test='XXX'/>)
   const instance = component.getInstance()
   expect(instance.state.text).toBe('')
});
})

