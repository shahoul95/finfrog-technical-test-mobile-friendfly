import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

const RegistrationConfirmation: React.FC = () => {
    const { firstName, lastName, email, phoneNumber, address } = useSelector(
        (state: RootState) => state.form
    );

    return (
        <Container className='mt-3 pb-4'>
            <p className='firstTextCustom mt-3'>
                Informations
                <br></br>
                <span className='informationConfirmation'>
                    personnelles
                </span>
            </p>
            <Card className='mt-4 cardCustom'>
                <Card.Body>
                    <p className='confirmationTextlabel mb-0'>
                        Prénom
                    </p>
                    <p className='textFormValue'>
                        {firstName}
                    </p>
                </Card.Body>
            </Card>
            <Card className='mt-4 cardCustom'>
                <Card.Body>
                    <p className='confirmationTextlabel mb-0'>
                        Nom
                    </p>
                    <p className='textFormValue'>
                        {lastName}
                    </p>
                </Card.Body>
            </Card>
            <Card className='mt-4 cardCustom'>
                <Card.Body>
                    <p className='confirmationTextlabel mb-0'>
                        Adresse email
                    </p>
                    <p className='textFormValue'>
                        {email}
                    </p>
                </Card.Body>
            </Card>
            <Card className='mt-4 cardCustom'>
                <Card.Body>
                    <p className='confirmationTextlabel mb-0'>
                        Numéro de téléphone
                    </p>
                    <p className='textFormValue'>
                        {phoneNumber}
                    </p>
                </Card.Body>
            </Card>
            <Card className='mt-4 cardCustom'>
                <Card.Body className='mb-2'>
                    <p className='confirmationTextlabel mb-0'>
                        Adresse domicile
                    </p>
                    <p className='textFormValue'>
                        {address}
                    </p>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default RegistrationConfirmation;