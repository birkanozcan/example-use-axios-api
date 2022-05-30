// Pages/index.js

import styles from '../styles/Home.module.scss'

const Homes = ({ Homes }) => {

  return (
    <div className={styles.cardContainer}>
      {Homes && Homes.map((axio, key) => (
        <div key={key}>
          <div className={styles.card}>
            <div className={styles.title}>
              Card 1
            </div>
            <div>
              {axio.name}
            </div>
          </div>
        </div>
      ))}

    </div>

  )
}

export default Homes;
