import React, { useState, useRef } from 'react'

import styles from './Right.module.scss';
import { useForm, ValidationError } from '@formspree/react';

//prime react components
import {InputTextarea} from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/rhea/theme.css'
import 'primereact/resources/primereact.css';

const RequestRide = () => {
  const [division, setDivision] = useState('');
  const [date, setDate] = useState('');

  const toast = useRef(null);

  let divisions = [
    {name: 'TimBits', code: 'Timbits'},
    {name: 'U9', value: 'U9'},
    {name: 'U11', code: 'U11'},
    {name: 'U13', code: 'U13'},
    {name: 'U15', code: 'U15'},
    {name: 'U18', code: 'U18'}
];

const [state, handleSubmit] = useForm("mnqlkgqj");
if (state.succeeded) {
  toast.current.show({severity: 'success', summary: 'Success Message', detail: 'Request Submitted'});
}
 
  return (
    <div className={styles.requestContainer}>
      <div className={styles.requestHeader}>
        <div className={styles.flux}>Request</div>
        <div className={styles.flux}>-a-</div>
        <div className={styles.neon}> Ride </div>
      </div>
      <h5>Request a ride for the next off-island game</h5>
      <form onSubmit={handleSubmit} className={styles.requestForm}>
        <InputText
          className={styles.formItem}
          id="phone"
          type="phone" 
          name="phone"
          placeholder="Phone Number"
        />
        <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
        />
        <InputText
          className={styles.formItem}
          id="email"
          type="email" 
          name="email"
          placeholder="Email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <InputText
          className={styles.formItem}
          id="parent"
          type="parent" 
          name="parent"
          placeholder="Parent's Name"
        />
        <ValidationError 
          prefix="Parent Name" 
          field="parent"
          errors={state.errors}
        />
        <InputText
          className={styles.formItem}
          id="child"
          type="child" 
          name="child"
          placeholder="Child's Name"
        />
        <ValidationError 
          prefix="Child" 
          field="child"
          errors={state.errors}
        />
        <Dropdown 
          className={styles.formItem}
          id="division" 
          name="division" 
          optionLabel="name" 
          optionValue="code" 
          value={division} 
          options={divisions} 
          onChange={(e) => setDivision(e.value)} placeholder="Select a Division"/>
        <ValidationError 
          prefix="Division" 
          field="division"
          errors={state.errors}
        />
        <Calendar 
          id="date"
          name="dateofgame"
          placeholder="Select Game Date"
          value={date} 
          onChange={(e) => setDate(e.value)} />
        <ValidationError 
          prefix="Date" 
          field="date"
          errors={state.errors}
        />
        <Button type="submit" disabled={state.submitting} >
          Submit
        </Button>
          
      </form>
      <Toast ref={toast}></Toast>
    </div>
  )
}

export default RequestRide
