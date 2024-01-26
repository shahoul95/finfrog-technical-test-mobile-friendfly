import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as actions from '../../store/actions/formAction';
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import '../../styles/Main.css'

const RegistrationAddress: React.FC = () => {
  const dispatch = useDispatch();
  const { address, isStepFormAddress } = useSelector(
    (state: RootState) => state.form
  );
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);


  const handleInputChangeAddress = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    dispatch(actions.updateAddress(inputValue));

    try {
      if (address.length >= 4) {
        const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${address}&limit=3`);
        const dataAddress = await response.json();
        const newSuggestions = dataAddress.features.map((feature: { properties: { label: string }; }) => feature.properties.label);
        setShowSuggestions(true);
        setSuggestions(newSuggestions);
        dispatch(actions.updateStepFormAddress(false));
      }
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    dispatch(actions.updateStep('confirmationStep'));
  };

  const handleSelectSuggestion = (selectedSuggestion: string) => {
    dispatch(actions.updateAddress(selectedSuggestion));
    setSuggestions([]);
    setShowSuggestions(false);
    dispatch(actions.updateStepFormAddress(true));
  };

  return (
    <Form noValidate validated={isStepFormAddress} onSubmit={handleSubmit}>
      <Form.Group>
        <p className='firstTextCustom mt-3'>
          Super ! Quelle est votre
          <span className='colorCustomText'>
            adresse de résidence
          </span>
          ?
        </p>
        <div className='pt-5'>
          {showSuggestions && (
            <ListGroup className="custom-list-group">
              {suggestions.map((suggestion, index) => (
                <ListGroup.Item
                  key={index}
                  onClick={() => handleSelectSuggestion(suggestion)}
                  className="custom-list-group-item"
                >
                  <p className='suggestionHover p-2'>
                    {suggestion}
                  </p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
          <Form.Control
            type="text"
            placeholder="Adresse"
            value={address}
            className='customInput'
            onChange={handleInputChangeAddress}
          />
        </div>
        <Button disabled={!isStepFormAddress} className='mt-2 float-end buttonSubmitCustom' type="submit">
          Continuer
        </Button>
      </Form.Group>
    </Form>
  );
}

export default RegistrationAddress;