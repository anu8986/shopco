import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Input = ({
  type,
  placeholder,
  options = [],
}) => {
  const navigate = useNavigate()
  const [optionList, setOptionList] = useState([])
  const [isshow, setIsshow] = useState(false)

  useEffect(() => {
    setOptionList(options)
  }, [options,])

  const handleshow = () => {
    setIsshow(!isshow)
  }

  const hanldechnage = (e) => {
    const inputchange = e.target.value
    if (inputchange == '') {
      setOptionList(options)
    } else {
      const filterchange = options && optionList.filter((item) => (item.value.toLowerCase().includes(inputchange.toLowerCase())))
      setOptionList(filterchange)
      setIsshow(true)
    }
  }

  const handleclick = (value) => {
    switch (value) {
      case 'Mens':
        navigate('/Menscollection')
        break;
      case 'Womens':
        navigate('/Womencollection')
        break;
      case 'Kids':
        navigate('/Kidscollection')
        break;
      case 'NewArrivals':
        navigate('/Newarraivels')
        break;
      case 'Offers':
        navigate('/Offers')
        break;
      case 'OfBrandsers':
        navigate('/Brands')
        break;
      case 'Shop':
        navigate('/Home')
        break;
    }
  }

  return (
    <div className="custom-input">
      <input
        type={type}
        className="input-search"
        placeholder={placeholder}
        onChange={(e) => hanldechnage(e)}
        onClick={handleshow}
      />

      {isshow && optionList.length > 0 && (
        <div className="search-menulist">
          <ul>
            {optionList.map((item) => (
              <li
                key={item.key}
                onClick={() => handleclick(item.key)}
                className="search-menuitem"
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Input
