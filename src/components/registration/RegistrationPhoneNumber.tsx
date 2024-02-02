import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as actions from '../../store/actions/formAction';
import '../../styles/Main.css'
import { regexPhoneNumber } from '../../utils/formRegex';
import { FormStep } from '../../types/enums/formStep';
import { ProgressBarPercentage } from '../../types/enums/progressBarPercentage';

const RegistrationPhoneNumber: React.FC = () => {
    const dispatch = useDispatch();
    const { phoneNumber, isStepFormPhoneNumber } = useSelector(
        (state: RootState) => state.form
    );

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPhoneValue = e.target.value;

        if (!newPhoneValue.trim()) {
            dispatch(actions.updatePhoneNumber(newPhoneValue));
            dispatch(actions.updateStepFormPhoneNumber(false));
        } else {
            dispatch(actions.updatePhoneNumber(newPhoneValue));
            const isPhoneNumber = regexPhoneNumber.test(newPhoneValue);
            dispatch(actions.updateStepFormPhoneNumber(isPhoneNumber));
        }
    };

    const handleSubmit = () => {
        dispatch(actions.updateStep(FormStep.Address));
        dispatch(actions.updateProgressBar(ProgressBarPercentage.Ninety));
    };

    return (
        <Form noValidate validated={isStepFormPhoneNumber} onSubmit={handleSubmit}>
            <Form.Group>
                <p className='firstTextCustom mt-3'>
                    Quel est votre
                    <span className='colorCustomText'>
                        numéro de téléphone
                    </span>
                    ?
                </p>
                <Form.Control
                    type="text"
                    placeholder="Numéro de téléphone"
                    value={phoneNumber}
                    className='customInput mt-5'
                    onChange={handlePhoneNumberChange}
                    required
                />
                <Button disabled={!isStepFormPhoneNumber} className='mt-2 float-end buttonSubmitCustom' type="submit">
                    Continuer
                </Button>
            </Form.Group>
        </Form>

    );
}

export default RegistrationPhoneNumber;
