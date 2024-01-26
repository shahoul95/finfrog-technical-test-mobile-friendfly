import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as actions from '../../store/actions/formAction';
import '../../styles/Main.css'
import { emailRegex } from '../../utils/formRegex';

const RegistrationMail: React.FC = () => {
    const dispatch = useDispatch();
    const { email, isStepFormMail } = useSelector(
        (state: RootState) => state.form
    );

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmailValue = e.target.value;

        if (!newEmailValue.trim()) {
            dispatch(actions.updateEmail(newEmailValue));
            dispatch(actions.updateStepFormMail(false));
        } else {
            dispatch(actions.updateEmail(newEmailValue));
            const isEmailValid =  emailRegex.test(newEmailValue);
            dispatch(actions.updateStepFormMail(isEmailValid));
        }
    };

    const handleSubmit = () => {
        dispatch(actions.updateStep('phoneNumberStep'));
        dispatch(actions.updateProgressBar(80));
    };

    return (
        <Form noValidate validated={isStepFormMail} onSubmit={handleSubmit}>
            <Form.Group>
                <p className='firstTextCustom mt-3'>
                    Quelle est votre
                    <span className='colorCustomText'>
                        adresse email
                    </span>
                    ?
                </p>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    className='customInput mt-5'
                    onChange={handleEmailChange}
                    required
                />
                <Button disabled={!isStepFormMail} className='mt-2 float-end buttonSubmitCustom' type="submit">
                    Continuer
                </Button>
            </Form.Group>
        </Form>

    );
}

export default RegistrationMail;