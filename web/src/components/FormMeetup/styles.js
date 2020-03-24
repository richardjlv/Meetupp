import { Form, Input } from '@rocketseat/unform';
import { darken } from 'polished';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 25px 10px;
  padding: 25px 10px;

  span {
    color: ${darken(0.05, '#f94d6a')};
    font-weight: bold;
    display: block;
    padding: 0 10px 15px;
    opacity: 0.8;
  }

  input {
    background: rgba(0, 0, 0, 0.2);
    max-height: 600px;
    width: 100%;
    border: 0;
    border-radius: 4px;
    height: 50px;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 10px 15px;
    color: rgba(255, 255, 255, 0.7);
  }

  textarea {
    line-height: 20px;
    margin: 15px 0;
    height: 200px;
    align-self: stretch;
    background: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.7);
    padding: 15px;
    border: 0;
    border-radius: 4px;
    resize: none;
  }

  button {
    background: #4dbaf9;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 25px;
    margin-top: 20px;
    font-size: 16px;

    &:hover {
      background: ${darken(0.05, '#4dbaf9')};
    }
  }
`;

export const Date = styled(Input)`
  max-width: 300px;
  width: 100%;

  &::-webkit-datetime-edit-fields-wrapper {
    padding: 0 0.7rem;
  }

  &::-webkit-datetime-edit-text {
    color: #eee;
    padding: 0 0.3em;
  }

  &::-webkit-inner-spin-button {
    display: none;
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;
