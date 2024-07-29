import React from 'react';
import theme from '../../styles/theme';

const Select = ( props ) => { 
  return(
    <select
      onChange={e => props.onChange(e)}
      value={props.value}
      style={{
        padding: '.5rem', // Assuming px: 2, py: 1
        borderRadius: '3px',
        border: '1px solid',
        borderColor: theme.colors.text,
        color: theme.colors.text,
        cursor: 'pointer',
        fontSize: '.8rem',
      }}
    >
      {props.children}
    </select>
  );
};

export default Select;