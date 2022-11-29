import React, { ChangeEvent,Dispatch,  FormEvent, SetStateAction } from 'react'
import styles from './searchBar.module.css'
import search from '../../assets/icons/icon-search.svg'


    interface SearchProps {
        setUserName: Dispatch<SetStateAction<string>>
        userName: string
        handleSubmit: () => void
        error: string | null
      }
      
   
    export const SearchBar = ({
        userName,
        setUserName,
        handleSubmit,
        error
      }: SearchProps) => {
  return (
    <form
        onSubmit={(e: FormEvent) => e.preventDefault()}
        className={styles.SearchBarWrap}
    >   <img className={styles.searchIcon} src={search} alt=''/>
          <input 
              type='text'
              className={styles.searchInput} 
              placeholder="Search GitHub username..."
              name="search-bar"
              onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
          />
          <span className={styles.errorMsg}>{error}</span>
        <button 
            className={styles.searchButton} 
            onClick=  {handleSubmit}
            >Search </button>
    </form>
  )
}
