import React, { useState } from 'react';
import styles from './Registration.module.scss'

//primereact
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { InputMask } from 'primereact/inputmask';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';

const Registration = () => {

  const [paymentVal, setPaymentVal] = useState();

  return (
    <div className={styles.container}>
      <form
        action="https://formspree.io/f/xpzkvvqb"
        method="POST"
        className={styles.register}
        acceptCharset="utf-8"
      >
              <h2>Register A Player</h2>
        <Card 
          className={styles.section}
          title="Player Info">
        <div className="p-fluid">
          <label htmlFor="playername">
            Player&apos;s Name
          </label>
          <InputText
            id="playername"
            type="text" 
            name="playername"
            className="p-input"
            required
          />
          <label htmlFor="playeremail">
            Email Address
          </label>
          <InputText
            id="playeremail"
            type="text" 
            name="playeremail"
            className="p-d-block p-mb-2"
            required
          />
          <label htmlFor="playerphone">
            Phone Number
          </label>
          <InputMask
            id="playerphone"
            mask="(999) 999-9999"
            placeholder="(999) 999-9999"
            name="playerphone"
            className="p-field"
            required
          />
          <div className="p-field p-col-12 p-md-4">
            <label htmlFor="dob">Date of Birth</label>
            <InputMask id="date" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" required/>
          </div>
          <label htmlFor="playername">
            Player&apos;s M.C.P. Number
          </label>
          <InputMask
            id="mcp"
            mask="999-999-999"
            placeholder="999-999-999"
            name="mcp"
            className="p-field"
            required
          />
          <label htmlFor="allergy">
            Allergy/Medical Concerns
          </label>
          <InputTextarea
            id="allergy"
            name="allergy"
            className="p-field"
            rows={3}
            />
        </div>
      </Card>
      <Card 
      className={styles.section}
      title="Parent/Guardian Info">
        <div className="p-fluid">
          <p>
            <label htmlFor="parent1name">
              First Parent/Guardian&apos;s Name
            </label>
            <InputText
              id="parent1name"
              type="text"
              name="parent1name"
              className="p-d-block p-mb-2"
              required
            />
            <label htmlFor="emailparent1">
            Email Address
            </label>
            <InputText
              id="emailparent1"
              type="email"
              className="p-d-block p-mb-2"
              name="_replyto" 
              required
            />
            <label htmlFor="phoneparent1">
              Phone Number
            </label>
            <InputMask
              id="phoneparent1"
              mask="(999) 999-9999"
              placeholder="(999) 999-9999"
              name="phoneparent1"
              className="p-field"
              required
            />
          </p>
          <p>
            <label htmlFor="pname">
              Second Parent/Guardian&apos;s Name (optional)
            </label>
            <InputText
              id="parent2name"
              type="text"
              name="parent2name"
              className="p-d-block p-mb-2"
            />
            <label htmlFor="emailparent2">
            Email Address
            </label>
            <InputText
              id="emailparent2"
              type="email"
              name="emailparent2"
              className="p-d-block p-mb-2"
            />
            <label htmlFor="phone">
              Phone Number
            </label>
            <InputMask
              id="phoneparent2"
              mask="(999) 999-9999"
              placeholder="(999) 999-9999"
              name="phoneparent2"
              className="p-field"
            />
          </p>
        </div>
      </Card>
      <Card 
      className={styles.section}
      title="Payment Information">
        <div className="p-fluid">
          <p>
            <label htmlFor="info">
              How will you be submitting payment for registration?
            </label>
            <select name="payment" required>
              <option value="Select" selected disabled>Method</option>
              <option value="Cash">Cash</option>
              <option value="Cheque">Cheque</option>
              <option value="EMT">EMT</option>
            </select>
          </p>
        </div>
      </Card>
      <Button type="submit">Send</Button>
    </form>
  </div>
  )
}

export default Registration