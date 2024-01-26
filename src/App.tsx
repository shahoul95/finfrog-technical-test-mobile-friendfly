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

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { step, progressBarPercent } = useSelector(
    (state: RootState) => state.form
  );

  const stepForms = ["formLastNameStep", "addressMailStep", "phoneNumberStep", "addressStep", "confirmationStep"];
  const iStepArrow = stepForms.includes(step)
  
  const stepMapping: any = {
    "formLastNameStep": { step: "formFirstNameStep", percentage: 20 },
    "addressMailStep": { step: "formLastNameStep", percentage: 40 },
    "phoneNumberStep": { step: "addressMailStep", percentage: 60 },
    "addressStep": { step: "phoneNumberStep", percentage: 80 },
    "confirmationStep": { step: "addressStep", percentage: 90 },
  };

  const handleArrowClick = () => {
    const stepPrevious = stepMapping[step].step;
    const progressBarPercent = stepMapping[step].percentage;
    dispatch(actions.updateStep(stepPrevious));
    dispatch(actions.updateProgressBar(progressBarPercent))
  };

  return (
    <div className="app-container">
      <Container>
        <Row className="justify-content-center align-items-center pt-5">
          <Col xs="1">
            {iStepArrow && (
              <Image onClick={handleArrowClick} src={arrow} height="30"></Image>
            )}
          </Col>
          <Col xs={!iStepArrow ? "12" : "11"}>
            {step !== 'confirmationStep' && (
              <ProgressBar className="customProgressBar"  now={progressBarPercent} />
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        {step === 'formFirstNameStep' && (
          <RegistrationFirstName />
        )}
        {step === 'formLastNameStep' && (
          <RegistrationLastName />
        )}
        {step === 'addressMailStep' && (
          <RegistrationMail />
        )}
        {step === 'phoneNumberStep' && (
          <RegistrationPhoneNumber />
        )}
        {step === 'addressStep' && (
          <RegistrationAddress />
        )}
        {step === 'confirmationStep' && (
          <RegistrationConfirmation />
        )}
      </Container>
    </div>
  );
};

export default App