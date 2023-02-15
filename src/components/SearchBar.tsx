import {BiSearchAlt2} from 'react-icons/bi'

type SearchBarProps ={
  containerClass: string
  classes : string
}

const SearchBar = ({containerClass,classes}:SearchBarProps) => {
  return (
    <div className={containerClass}>
        <BiSearchAlt2 className=" text-xl"/>
        <input  className={classes} placeholder='Search...'/>
    </div>
  )
}

export default SearchBar