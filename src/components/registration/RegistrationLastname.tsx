import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as actions from '../../store/actions/formAction';
import '../../styles/Main.css'
import { regexFirstNameAndLastName } from '../../utils/formRegex'
import { FormStep } from '../../types/enums/formStep';
import { ProgressBarPercentage } from '../../types/enums/progressBarPercentage';

const RegistrationLastName: React.FC = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, isStepFormLastName } = useSelector(
    (state: RootState) => state.form
  );

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLastNameValue = e.target.value;

    if (!newLastNameValue.trim()) {
      dispatch(actions.updateLastName(newLastNameValue));
      dispatch(actions.updateStepFormLastName(false));
    } else {
      dispatch(actions.updateLastName(newLastNameValue));
      const isLastName = regexFirstNameAndLastName.test(newLastNameValue);
      dispatch(actions.updateStepFormLastName(isLastName));
    }
  };

  const handleSubmit = () => {
    dispatch(actions.updateStep(FormStep.AddressMail));
    dispatch(actions.updateProgressBar(ProgressBarPercentage.Sixty));
  };

  return (
    <Form noValidate validated={isStepFormLastName} onSubmit={handleSubmit}>
      <Form.Group>
        <p className='firstTextCustom mt-3'>
          Merci {firstName}, quel est votre
          <span className='colorCustomText'>
            nom de famille
          </span>
          ?
        </p>
        <Form.Control
          type="text"
          placeholder="Nom"
          value={lastName}
          className='customInput mt-5'
          onChange={handleLastNameChange}
        />
        <Button disabled={!isStepFormLastName} className='mt-2 float-end buttonSubmitCustom' type="submit">
          Continuer
        </Button>
      </Form.Group>
    </Form>

  );
}

export default RegistrationLastName;
