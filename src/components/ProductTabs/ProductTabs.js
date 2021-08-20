import React, {useEffect, useState} from 'react';
import './ProductTabs.css'

const selectedStyle={
  background: '#2981de',
}

const nonselectedStyle={
  background: 'grey',
}

const ProductTabs = ({product}) => {
  const [tab, setTab] = useState('feature')
  const [tabContent, setTabContent] = useState('')

  console.log(product)

  useEffect(()=>{
    setTabContent(product[tab])
  },[tab])

  return(
    <div>
        <div>
          <ul className="product-tab">
            <li style={tab==='feature'?selectedStyle:nonselectedStyle} onClick={()=>setTab('feature')}>Features</li>
            <li style={tab==='spec'?selectedStyle:nonselectedStyle} onClick={()=>setTab('spec')}>Specification</li>
            <li style={tab==='related'?selectedStyle:nonselectedStyle} onClick={()=>setTab('related')}>Related Products</li>
          </ul>
        </div>
      <div className="tab-content">
        <p>
          {tabContent}
        </p>
      </div>
    </div>
  )
}

export default ProductTabs
