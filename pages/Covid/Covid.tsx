import React from 'react'
import styles from './Covid.module.scss'
import Head from 'next/head'
import { Card } from 'primereact/card';

const Covid = () => {

  const header = <h1>Covid Policy</h1>;
  const footer = 
  <span>
    Questions/concerns: <a href="mailto:bellislandminorhockey@gmail.com">Email Us</a>
  </span>;

<Card footer={footer} header={header}>
    Content
</Card>
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Covid Policy</title>
        <meta name="Covid" content="BIMHA Covid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card className={styles.content} header={header} subTitle="Effective October 22, 2021" footer={footer}>

      Where proof of vaccination is required

By October 22, 2021, you must be fully vaccinated or have an approved medical exemption in order to access the following businesses and settings:

Gatherings of any size held for socializing, celebration, ceremony or entertainment that are hosted at a recognized business or organization, a rental room, community centre, or other venues used to host gatherings (e.g. weddings, funerals, birthday parties, baby showers, faith-based gatherings)
Conferences, conventions and trade shows
Arenas
Indoor gyms and fitness facilities, yoga studios, and dance studios
Places where sports or recreational activities are practiced indoors
Places where group music, art, dance, and drama activities are practiced indoors, including bands, choirs, dance and music classes
Indoor entertainment facilities (arcades, trampoline parks, bowling alleys, billiard halls, golf, laser tag, indoor playgrounds, and paintball)
Bars and lounges
Restaurants (indoor seated dining only, including food courts; does not apply to outdoor patios, take-out, delivery, or drive-thru services)
Cinemas and performance spaces
Bingo halls
Personal service establishments including spas, esthetic services, hair salons, barber shops, body piercing, tattooing and tanning salons
Long-term care homes, personal care homes, assisted living facilities, community care homes (visitors only; does not apply to residents living in these settings)
Note: Employees, volunteers, contractors, vendors or suppliers of the businesses, organizations or activities where proof of vaccination is required have until December 17, 2021 to be fully vaccinated under the COVID-19 Vaccine Regulations (see pages 9-15 of the Newfoundland and Labrador Gazette, vol. 96, no.42).
      </Card>
    </div>
  )
}

export default Covid
