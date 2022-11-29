import React from 'react'
import styles from './card.module.css'
import userIcon from '../../assets/images/cat.png'
import location from '../../assets/icons/icon-location.svg'
import website from '../../assets/icons/icon-website.svg'
import twitter from '../../assets/icons/icon-twitter.svg'
import company from '../../assets/icons/icon-company.svg'

export default function Card() {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.userWrap}>
          <img src={userIcon} className={styles.userAvatar} alt='avatar'/>
          <div className={styles.userDataWrap}>
            <div className={styles.userData}>
              <div className={styles.userPersonal}>
                <div className={styles.userPersonalDetails}>
                  <div className={styles.user}>The Octocat</div>
                  <div className={styles.username}>@octocat</div>
                  <div className={styles.userBio}>this profile has no Bio</div>
                </div>
              </div>
              <div className={styles.userJoined}>Joined <span>25 January</span> 2011</div>
            </div>
            <div className={styles.userStats}>
              <div className={styles.userStatsDetals}>
                <div className={styles.userStatsTitle}>Repos</div>
                <span className={styles.userStatsDetail}> 8</span>
              </div>
              <div className={styles.userStatsDetals}>
                <div className={styles.userStatsTitle}>Followers</div>
                <span className={styles.userStatsDetail}>12</span>
              </div>
              <div className={styles.userStatsDetals}>
                <div className={styles.userStatsTitle} >Following</div>
                <span className={styles.userStatsDetail} > 13</span>
              </div>
            </div>
            <div className={styles.otherDetails}>
              <div className={styles.otherDetailsColumn}>
                <div className={styles.otherDetailsItem}>
                  <img className={styles.otherDetailsIcon} src={location} alt=''/>
                  <div className={styles.otherDetailsTitle}>San Francisco</div>
                </div>
                <div className={styles.otherDetailsItem}>
                  <img className={styles.otherDetailsIcon} src={website} alt=''/>
                  <div className={styles.otherDetailsTitle}>https://github.blog</div>
                </div>
              </div>
              <div className={styles.otherDetailsColumn}>
                <div className={styles.otherDetailsItem}>
                  <img className={styles.otherDetailsIcon} src={twitter} alt=''/>
                  <div className={styles.otherDetailsTitle}>Not Available</div>
                </div>
                <div className={styles.otherDetailsItem}>
                  <img className={styles.otherDetailsIcon} src={company} alt=''/>
                  <div className={styles.otherDetailsTitle}>@github</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
