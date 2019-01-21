/**
 *
 * TextInput
 *
 */

import React from 'react';
import {
  Field,
  Control,
  Label,
  Input,
  Help,
} from 'react-bulma-components/lib/components/form';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const TextInput = ({
  input,
  label,
  type,
  meta: { touched, error },
  ...othersProps
}) => {
  const color = touched && error ? 'danger' : null;
  return (
    <div>
      {/* <TextField
        label={label}
        color="primary"
        id={label}
        type={type}
        error={touched && Boolean(error)}
        fullWidth
        {...input}
        {...othersProps}
      /> */}
      <Field>
        <Label>{label}</Label>
        <Control>
          <Input
            color={touched && error ? 'danger' : 'primary'}
            type={type}
            {...input}
            {...othersProps}
          />
        </Control>
        <Help color={color}>{touched && error}</Help>
      </Field>
    </div>
  );
};

TextInput.propTypes = {};

export default TextInput;
