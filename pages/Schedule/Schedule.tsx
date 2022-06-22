/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect, useRef } from 'react'
import styles from './Schedule.module.scss'
import { useDivision, } from '@context/state';

//primereact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

const Schedule = () => {

  const divs = useDivision();

  const [events, setEvents] = useState(null);
  const [eventDialog, setEventDialog] = useState(false);
  const [updateEventDialog, setUpdateEventDialog] = useState(false);
  const [deleteEventDialog, setDeleteEventDialog] = useState(false);
  const [deleteEventsDialog, setDeleteEventsDialog] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [display, setDisplay] = useState(false)
  const dt = useRef(null);

  const scheduleLoader = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `${process.env.NEXT_PUBLIC_HARPER_HEADER}`);

    const raw = JSON.stringify({
        "operation": "sql",
        "sql": `SELECT * FROM schedule.${divs.division}schedule`
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    
    fetch("https://bimhl-adamryan.harperdbcloud.com", requestOptions)
      .then(response => response.text())
      .then(result => setEvents(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    scheduleLoader();
  }, [divs.division]); // eslint-disable-line react-hooks/exhaustive-deps

const header = (
    <div className="tableHeader">
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" onInput={(e: any) => setGlobalFilter(e.target.value)} placeholder="Search..." />
        </span>
    </div>
  );

  return (
  <>
    { events === 'undefined' ? <div>...Loading</div> : 
      <div className={styles.container}>
        <h2>Schedule for {divs.division}</h2>
        <div className={styles.dataTable}>

          <DataTable className={styles.dataTableObject}ref={dt} value={events!} selection={selectedEvents} onSelectionChange={(e) => setSelectedEvents(e.value)}
            dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} events"
            globalFilter={globalFilter}
            header={header}>

            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
            <Column field="date" header="Date" sortable></Column>
            <Column field="time" header="Time"></Column>
            <Column field="location" header="Location" sortable></Column>
            <Column field="opponent" header="Opponent"></Column>
            <Column field="title" header="Game Type" sortable></Column>
          </DataTable>
          
        </div>
      </div>
   }
  </>
  )
}

export default Schedule