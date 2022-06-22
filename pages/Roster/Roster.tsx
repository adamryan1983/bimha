// import { NextPage } from 'next'
// import styles from './Roster.module.scss'
// import { useDivision, } from '@context/state';
// import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';

// const Roster:NextPage = () => {
//   const divs = useDivision();
//   return (
//     <div className={styles.container}>
//       {divs.division}
//     </div>
//   )
// }

// export default Roster

/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect, useRef } from 'react'
import styles from './Roster.module.scss'
import { useDivision, } from '@context/state';

//primereact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

const Roster = () => {

  const divs = useDivision();

  const [players, setPlayers] = useState(null);
  const [selectedPlayers, setSelectedPlayers] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const dt = useRef(null);

  const rosterLoader = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `${process.env.NEXT_PUBLIC_HARPER_HEADER}`);

    const raw = JSON.stringify({
        "operation": "sql",
        "sql": `SELECT * FROM roster.${divs.division}roster`
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    
    fetch("https://bimhl-adamryan.harperdbcloud.com", requestOptions)
      .then(response => response.text())
      .then(result => setPlayers(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    rosterLoader();
  }, [divs.division]); // eslint-disable-line react-hooks/exhaustive-deps

const header = (
    <div className="tableHeader">
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText type="search" onInput={(e:any) => setGlobalFilter(e.target.value)} placeholder="Search..." />
        </span>
    </div>
  );

  return (
  <>
    { players === 'undefined' ? <div>...Loading</div> : 
      <div className={styles.container}>
        <h2>Roster for {divs.division}</h2>
        <div className={styles.dataTable}>

          <DataTable ref={dt} value={players!} selection={selectedPlayers} onSelectionChange={(e) => setSelectedPlayers(e.value)}
              dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} players"
              globalFilter={globalFilter}
              header={header}
              className={styles.dataTableObject}>

            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
            <Column field="name" header="Name" sortable></Column>
            <Column field="dob" header="Date of Birth" sortable></Column>
            <Column field="jersey" header="Jersey #" sortable></Column>
            <Column field="status" header="Status" sortable></Column>
          </DataTable>
          
        </div>
      </div>
   }
  </>
  )
}

export default Roster