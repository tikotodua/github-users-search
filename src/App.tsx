import React, { useState, useEffect } from 'react';
import './App.css';
import moon from './assets/icons/icon-moon.svg'
import sun from './assets/icons/icon-sun.svg'
import {SearchBar} from './components/searchBar/SearchBar'
import axios from "axios"
import Moment from 'react-moment';
import location from './assets/icons/icon-location.svg'
import website from './assets/icons/icon-website.svg'
import twitter from './assets/icons/icon-twitter.svg'
import company from './assets/icons/icon-company.svg'


function App() {

 
  const localTheme = JSON.parse(localStorage.getItem('key_name')!) || false;
const [scheme, setScheme] = useState(localTheme);
  

  console.log('scheme', scheme)
  useEffect(() => {
    document.body.classList.toggle('light', scheme);
    localStorage.setItem('key_name',scheme); 
  }, [scheme]);

  interface User {
    id: number 
    html_url: string | null, 
    avatar_url: string | '', 
    login: string | null,
    name: string | null,
    bio: string | null,
    twitter_username: string | null
    following: number | null,
    followers: number | null,
    public_repos: number | null,
    location: string | null,
    blog: string | '',
    company: string | null,
    created_at: string | null
  }

  const BASE_URL = "https://api.github.com"

  const [userName,setUserName] = useState<string>('')
  const [user, setUser] = useState<User | null>({
    id: 583231, 
    html_url: "https://github.com/octocat",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    login: "octocat",
    name: "The Octocat",
    bio: null,
    twitter_username: null,
    following: 9,
    followers: 7652,
    public_repos: 8,
    location:  "San Francisco",
    blog: "https://github.blog",
    company: "@github",
    created_at: "2011-01-25T18:44:36Z"
  })
  const [error, setError] = useState<string | null>(null)
  console.log('error', error)

  const handleSubmit = async () => {
    if (!userName) {
      return setError("Fill in the search field.")
    }

    try {
      const { data: userData } = await axios.get<User>(
        `${BASE_URL}/users/${userName}`,
        // {
        //   headers: {
        //     Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        //   },
        // }
      )
      const {
        id,
        html_url,
        avatar_url,
        login,
        name,
        bio,
        twitter_username,
        followers,
        following,
        public_repos,
        location,
        blog,
        company,
        created_at
      } = userData

      setUser({
        id,
        html_url,
        avatar_url,
        login,
        name,
        bio,
        twitter_username,
        followers,
        following,
        public_repos,
        location,
        blog,
        company,
        created_at
      })
      setError(null)
    } catch (error: any) {
      if (error.response.data.message === "Not Found") {
        setError("No Results")
      }
    }
  }
  const dateToFormat = user?.created_at;
  return (
    <>


           
    <div className="App">
      <div className='container-wrap'>
        <div className="header-wrap">
          <div className='app-title'>devfinder</div>
          <div className='theme_switcher' onClick={()=> setScheme(!scheme)}>
            <div className='theme-title'>{scheme ? 'Light' : 'Dark'}</div>
            <img className='theme-icon' src={!scheme ? `${moon}` : `${sun}`} alt="theme-switcher"/>
          </div>
        </div>
        <SearchBar
          userName={userName}
          setUserName={setUserName}
          handleSubmit={handleSubmit}
          error={error}
        />
        <div className="cardWrap">
      <div className='userWrap'>
          <img src={user?.avatar_url} className="userAvatar" alt="avatar"/>
          <div className='userDataWrap'>
            <div className='userData'>
              <div className='userPersonal'>
                <div className='userPersonalDetails'>
                  <div className='user'>{user?.name}</div>
                  <div className='login'>{`@${user?.login}`}</div>
                  <div className='userBio'>{user?.bio !== null ? user?.bio : 'Not Available'}</div>
                  
                </div>
              </div>
              <div className='userJoine'>Joined <Moment format="DD MMMM YYYY">{dateToFormat!}</Moment></div>
            </div>
            <div className='userStats'>
              <div className='userStatsDetals'>
                <div className='userStatsTitle'>Repos</div>
                <span className='userStatsDetail'> {user?.public_repos}</span>
              </div>
              <div className='userStatsDetals'>
                <div className='userStatsTitle'>Followers</div>
                <span className='userStatsDetail'>{user?.followers}</span>
              </div>
              <div className='userStatsDetals'>
                <div className='userStatsTitle' >Following</div>
                <span className='userStatsDetail' > {user?.following}</span>
              </div>
            </div>
            <div className='otherDetails'>
              <div className='otherDetailsColumn'>
                <div className='otherDetailsItem'>
                  <img className='otherDetailsIcon' src={location} alt=''/>
                  <div className='otherDetailsTitle'>{user?.location !== null ? user?.location : 'Not Available'}</div>
                </div>
                <div className='otherDetailsItem'>
                  <img className='otherDetailsIcon' src={website} alt=''/>
                  <div className='otherDetailsTitle'>{user?.blog !== '' ? user?.blog : 'Not Available'}</div>
                </div>
              </div>
              <div className='otherDetailsColumn'>
                <div className='otherDetailsItem'>
                  <img className='otherDetailsIcon' src={twitter} alt=''/>
                  <div className='otherDetailsTitle'>{user?.twitter_username !== null ? user?.twitter_username : 'Not Available'}</div>
                  
                </div>
                <div className='otherDetailsItem'>
                  <img className='otherDetailsIcon' src={company} alt=''/>
                  <div className='otherDetailsTitle'>{user?.company !== null ? user?.company : 'Not Available'}</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
      </div>
    </div>
    </>
  );
}

export default App;
