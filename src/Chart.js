import React, { useState } from 'react';
import NavBarr from "./components/NavBarr";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './App.css';

const UserPanel = () => {
  const [userData, setUserData] = useState({
    firstName: 'Jan',
    lastName: 'Kowalski',
    secondName: 'Adam',
    pesel: '90090515836',
    phone: '123456789',
    street: 'Kwiatowa',
    houseNumber: '10',
    apartmentNumber: '2',
    postalCode: '00-001',
    city: 'Warszawa',
    paymentMethod: 'Karta kredytowa',
    cardNumber: '**** **** **** 1234',
    expiryDate: '01/23'
  });

  const [editMode, setEditMode] = useState({
    personal: false,
    address: false,
    payment: false
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const saveUserData = (section) => {
    setEditMode({...editMode, [section]: false});
    alert('Dane zostały zapisane.');
  };

  const renderEditForm = (fields) => {
    return (
      <Form>
        {fields.map(field => (
          <Form.Group controlId={`form${field.name}`} key={field.name}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={handleInputChange}
            />
          </Form.Group>
        ))}
        <Button variant="primary" onClick={() => saveUserData(fields[0].section)}>Zapisz zmiany</Button>
        <Button variant="secondary" onClick={() => setEditMode({...editMode, [fields[0].section]: false})} className="ml-2">Anuluj</Button>
      </Form>
    );
  };

  const renderDisplayData = (fields, section) => {
    return (
      <div>
        {fields.map(field => (
          <p key={field.name}><strong>{field.label}:</strong> {field.value}</p>
        ))}
        <Button variant="primary" onClick={() => setEditMode({...editMode, [section]: true})}>Edytuj</Button>
      </div>
    );
  };

  return (
    <div>
      <NavBarr />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title>Dane osobowe</Card.Title>
                {editMode.personal ? renderEditForm([
                  { name: 'firstName', label: 'Imię', type: 'text', value: userData.firstName, section: 'personal' },
                  { name: 'secondName', label: 'Drugie imię', type: 'text', value: userData.secondName, section: 'personal' },
                  { name: 'lastName', label: 'Nazwisko', type: 'text', value: userData.lastName, section: 'personal' },
                  { name: 'pesel', label: 'PESEL', type: 'text', value: userData.pesel, section: 'personal' },
                  { name: 'phone', label: 'Telefon', type: 'text', value: userData.phone, section: 'personal' }
                ]) : renderDisplayData([
                  { name: 'firstName', label: 'Imię', value: userData.firstName },
                  { name: 'secondName', label: 'Drugie imię', value: userData.secondName },
                  { name: 'lastName', label: 'Nazwisko', value: userData.lastName },
                  { name: 'pesel', label: 'PESEL', value: userData.pesel },
                  { name: 'phone', label: 'Telefon', value: userData.phone }
                ], 'personal')}
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title>Dane adresowe</Card.Title>
                {editMode.address ? renderEditForm([
                  { name: 'street', label: 'Ulica', type: 'text', value: userData.street, section: 'address' },
                  { name: 'houseNumber', label: 'Numer domu', type: 'text', value: userData.houseNumber, section: 'address' },
                  { name: 'apartmentNumber', label: 'Numer mieszkania', type: 'text', value: userData.apartmentNumber, section: 'address' },
                  { name: 'postalCode', label: 'Kod pocztowy', type: 'text', value: userData.postalCode, section: 'address' },
                  { name: 'city', label: 'Miasto', type: 'text', value: userData.city, section: 'address' }
                ]) : renderDisplayData([
                  { name: 'street', label: 'Ulica', value: userData.street },
                  { name: 'houseNumber', label: 'Numer domu', value: userData.houseNumber },
                  { name: 'apartmentNumber', label: 'Numer mieszkania', value: userData.apartmentNumber },
                  { name: 'postalCode', label: 'Kod pocztowy', value: userData.postalCode },
                  { name: 'city', label: 'Miasto', value: userData.city }
                ], 'address')}
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title>Dane płatnicze</Card.Title>
                {editMode.payment ? renderEditForm([
                  { name: 'paymentMethod', label: 'Metoda płatności', type: 'select', value: userData.paymentMethod, section: 'payment' },
                  { name: 'cardNumber', label: 'Numer karty', type: 'text', value: userData.cardNumber, section: 'payment' },
                  { name: 'expiryDate', label: 'Data ważności', type: 'text', value: userData.expiryDate, section: 'payment' }
                ]) : renderDisplayData([
                  { name: 'paymentMethod', label: 'Metoda płatności', value: userData.paymentMethod },
                  { name: 'cardNumber', label: 'Numer karty', value: userData.cardNumber },
                  { name: 'expiryDate', label: 'Data ważności', value: userData.expiryDate }
                ], 'payment')}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
