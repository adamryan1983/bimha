import React from 'react'
import styles from './About.module.scss'
import Head from 'next/head'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="About" content="BIMHA About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heading}>
        <h2>Information about the Bell Island Minor Hockey Association</h2>
      </div>
      <div className={styles.contentBI}>
        <div className={styles.textSection}>
          Bell Island is an island that is a part of Newfoundland and Labrador.
          It is located off the Avalon peninsula in Conception Bay. The largest
          town on the island is Wabana.
        </div>
        <div className={styles.imageSection}>
          <Image
            src="/images/bellisland.webp"
            height="400"
            width="600"
            alt="bell island"
          />
        </div>
      </div>
      <div className={styles.blurb}>
        <p>
          The Bell Island Minor Hockey Association was founded in 1987 to
          provide a game of hockey, either house league or the all-star level, for
          the youth of Bell Island.
        </p>
        <p>
          Our first year of operation saw a registration of 307 kids. We had an
          executive of 9 members with a fantastic Minor Moms Organization which
          raised upwards of $10,000 that first year.We are members of the Hockey
          Newfoundland and Labrador (HNL),a branch of Hockey Canada.
        </p>
        <p>
          As a member of this group, we adhere to the Fair Play policy of Hockey 
          Newfoundland and Labrador. Our philosophy is to develop a positive tradition 
          of hockey pride in our community, province and country that encourages fitness, 
          socialization, teamwork, self confidence and hockey development in an 
          environment that promotes fun, respect, fair play and sportsmanship without 
          intimidation or criticism.
        </p>
        <p>
          Bell Island Miners would like to welcome you to our
          website. This website has been designed to provide up-to-date
          information regarding our association. This information, which includes
          rosters, schedules, and announcements, is important to all players,
          coaches, parents, and fans. Thank you, - Bell Island Miners
        </p>
      </div>
    </div>
  );
}

export default About
