import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import RegistrationFirstName from './components/registration/RegistrationFirstName';
import RegistrationLastName from './components/registration/RegistrationLastname';
import RegistrationAddress from './components/registration/RegistrationAddress';
import RegistrationPhoneNumber from './components/registration/RegistrationPhoneNumber';
import RegistrationMail from './components/registration/RegistrationMail';
import RegistrationConfirmation from './components/registration/RegistrationConfirmation';
import arrow from '../src/assets/images/Arrow.svg'
import Image from 'react-bootstrap/Image';
import * as actions from '../src/store/actions/formAction';
import '../src/styles/Main.css'
import { stepMapping } from './utils/mappingStep';
import { FormStep } from './types/enums/formStep';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { step, progressBarPercent } = useSelector(
    (state: RootState) => state.form
  );

  const stepForms: Array<FormStep> = [FormStep.LastName, FormStep.AddressMail, FormStep.PhoneNumber, FormStep.Address, FormStep.Confirmation];
  const iStepArrow: boolean = stepForms.includes(step)

  const handleArrowClick = () => {
    const stepPrevious = stepMapping[step].stepPrevious;
    const progressBarPercent = stepMapping[step].percentage;
    dispatch(actions.updateStep(stepPrevious));
    dispatch(actions.updateProgressBar(progressBarPercent))
  };

  return (
    <div className="appContainer">
      <Container>
        <Row className="justify-content-center align-items-center pt-5">
          <Col xs="1">
            {iStepArrow && (
              <Image onClick={handleArrowClick} src={arrow} height="30" width="30" alt="arrow"></Image>
            )}
          </Col>
          <Col xs={!iStepArrow ? "12" : "11"}>
            {step !== FormStep.Confirmation && (
              <ProgressBar className="customProgressBar" now={progressBarPercent} role="progressbar" />
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        {step === FormStep.FirstName && (
          <RegistrationFirstName />
        )}
        {step === FormStep.LastName && (
          <RegistrationLastName />
        )}
        {step === FormStep.AddressMail && (
          <RegistrationMail />
        )}
        {step === FormStep.PhoneNumber && (
          <RegistrationPhoneNumber />
        )}
        {step === FormStep.Address && (
          <RegistrationAddress />
        )}
        {step === FormStep.Confirmation && (
          <RegistrationConfirmation />
        )}
      </Container>
    </div>
  );
};

export default App