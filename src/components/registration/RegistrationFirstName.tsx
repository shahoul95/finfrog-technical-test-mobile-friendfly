import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as actions from '../../store/actions/formAction';
import '../../styles/Main.css'
import { regexFirstNameAndLastName } from '../../utils/formRegex'

const RegistrationFirstName: React.FC = () => {
    const dispatch = useDispatch();
    const { firstName, isStepFormFirstName } = useSelector(
        (state: RootState) => state.form
    );

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFirstNameValue = e.target.value;

        if (!newFirstNameValue.trim()) {
            dispatch(actions.updateFirstName(newFirstNameValue));
            dispatch(actions.updateStepFormFirstName(false));
        } else {
            dispatch(actions.updateFirstName(e.target.value));
            const isFirstName = regexFirstNameAndLastName.test(newFirstNameValue);
            dispatch(actions.updateStepFormFirstName(isFirstName));
        }
    };

    const handleSubmit = () => {
        dispatch(actions.updateStep('formLastNameStep'));
        dispatch(actions.updateProgressBar(40));
    };

    return (
        <Form noValidate validated={isStepFormFirstName} onSubmit={handleSubmit}>
            <Form.Group>
                <p className='firstTextCustom mt-3'>
                    Pour commencer, quel est votre
                    <span className='colorCustomText'>
                        prénom
                    </span>
                    ?
                </p>
                <Form.Control
                    type="text"
                    placeholder="Prénom"
                    value={firstName}
                    className='customInput mt-5'
                    onChange={handleFirstNameChange}
                />
                <Button disabled={!isStepFormFirstName} className='mt-2 float-end buttonSubmitCustom' type="submit">
                    Continuer
                </Button>
            </Form.Group>
        </Form>

    );
}

export default RegistrationFirstName;
