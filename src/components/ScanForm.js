import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin: 5px 0;
`;

const StyledCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

const StyledError = styled.div`
  color: red;
  font-size: 0.8em;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const StyledButton = styled.button`
  width: 100px;
  margin-top: 5px;
`;

const schema = yup.object().shape({
  target: yup.string().required('You must enter a target'),
  kb: yup.string().required('You must enter a knowledge base'),
  module: yup.string().required('You must enter a module'),
});

const ScanForm = ({ onSubmit }) => {
  const {
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputWrapper>
        <label htmlFor="target">Target</label>
        <input {...register('target')} />
        <StyledError>{errors.target && errors.target.message}</StyledError>
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label htmlFor="kb">Knowledge Base</label>
        <input {...register('kb')} />
        <StyledError className="text-danger">
          {errors.kb && errors.kb.message}
        </StyledError>
      </StyledInputWrapper>
      <StyledInputWrapper>
        <label htmlFor="module">Module</label>
        <input {...register('module')} />
        <StyledError>{errors.module && errors.module.message}</StyledError>
      </StyledInputWrapper>
      <StyledCheckbox>
        <input {...register('human')} type="checkbox" />
        <label htmlFor="human">Human friendly</label>
      </StyledCheckbox>
      <StyledButton disabled={!isDirty || !isValid} type="submit">
        {isSubmitting ? 'Loading' : 'Submit'}
      </StyledButton>
    </StyledForm>
  );
};

ScanForm.propTypes = {
  onSubmit: PropTypes.func,
};

ScanForm.defaultProps = {
  onSubmit: () => {},
};

export default ScanForm;
