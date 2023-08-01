import  { useState } from 'react'

function MensServices() {
    const [hairCut,setHairCut]=useState([
        {
            id: 1,
            title: "Hair Cutting",
            description:"The Best Style For Your Hair's Texture ",
            description2:" Totally Cleanliness and Hygiene",
            description3:" sanitized equipment with Stylist's Portfolio partners",
            Price: "\u20B9 100",
          },
    ])
    const[shaving,setShaving]=useState([
      {
        id: 2,
        title: "Shaving",
        description:"experienced barber ",
        description2:" Totally Cleanliness and Hygiene",
        description3:" sanitized equipment with Stylist's Portfolio partners",
        Price: "\u20B9 100",
      },
    ])
    const[skin,setSkin]=useState([
      {
        id: 3,
        title: "Skin Care",
        description:"Expert on skin facial treatment process ",
        description2:" Totally Cleanliness and Hygiene ,Relaxation aftercare",
        description3:" sanitized equipment with Stylist's Portfolio partners",
        Price: "\u20B9 100",
      },
    ])

  const [massage,setMassage]=useState([
    {
      id: 5,
      title: "Massage",
      description:"Certified Masseurs",
      description2:" Totally Cleanliness and Hygiene ,Relaxation after Massage",
      description3:" sanitized equipment with Stylist's Portfolio partners",
      Price: "\u20B9 100",
    },
  ])
 
  const[kids,setKids]=useState([
    {
      id: 6,
      title: "kid's hair cut",
      description:"sanitized equipment and experienced barber",
      description2:" Totally Cleanliness and Hygiene ",
      description3:" sanitized equipment with Stylist's Portfolio partners",
      Price: "\u20B9 100",
    },
  ])



  return (
    <div className='Men_frgmntDiv'>
       
        
        
        <div className="Men_fl">
       
          {hairCut.map((items) => {
            return (
              <div key={items.id} className=" Men_main">
                <div className="Men_submain">
                  <p>{items.id}</p>
                  <h3>{items.title}</h3>
                  
                  <ul>
                    <li><p className='description'> {items.description}</p></li>
                    <li><p className='description'>{items.description2}</p></li>
                    <li><p className='description'>{items.description3}</p></li>
                  </ul>
                  
                  <p>{items.Price}</p>
                  <button>Add</button>

                  
                  
                </div>
              </div>
            );
          })}
        </div>
      {/* ------------------------------------------------------------------ */}
      
      <div className="Men_fl">
       
       {shaving.map((items) => {
         return (
           <div key={items.id} className=" Men_main">
             <div className="Men_submain">
               <p>{items.id}</p>
               <h3>{items.title}</h3>
               
               <ul>
                 <li><p className='description'> {items.description}</p></li>
                 <li><p className='description'>{items.description2}</p></li>
                 <li><p className='description'>{items.description3}</p></li>
               </ul>
               
               <p>{items.Price}</p>
               <button>Add</button>

               
               
             </div>
           </div>
         );
       })}
     </div>
     {/* ------------------------------------------------------------------ */}
    
     <div className="Men_fl">
       
       {skin.map((items) => {
         return (
           <div key={items.id} className=" Men_main">
             <div className="Men_submain">
               <p>{items.id}</p>
               <h3>{items.title}</h3>
               
               <ul>
                 <li><p className='description'> {items.description}</p></li>
                 <li><p className='description'>{items.description2}</p></li>
                 <li><p className='description'>{items.description3}</p></li>
               </ul>
               
               <p>{items.Price}</p>
               <button>Add</button>

               
               
             </div>
           </div>
         );
       })}
     </div>
   {/* ----------------------------------------------------------------- */}

   <div className="Men_fl">
       
       {massage.map((items) => {
         return (
           <div key={items.id} className=" Men_main">
             <div className="Men_submain">
               <p>{items.id}</p>
               <h3>{items.title}</h3>
               
               <ul>
                 <li><p className='description'> {items.description}</p></li>
                 <li><p className='description'>{items.description2}</p></li>
                 <li><p className='description'>{items.description3}</p></li>
               </ul>
               
               <p>{items.Price}</p>
               <button>Add</button>

               
               
             </div>
           </div>
         );
       })}
     </div>
{/* ----------------------------------------------------------------------------- */}
<div className="Men_fl">
       
       {kids.map((items) => {
         return (
           <div key={items.id} className=" Men_main">
             <div className="Men_submain">
               <p>{items.id}</p>
               <h3>{items.title}</h3>
               
               <ul>
                 <li><p className='description'> {items.description}</p></li>
                 <li><p className='description'>{items.description2}</p></li>
                 <li><p className='description'>{items.description3}</p></li>
               </ul>
               
               <p>{items.Price}</p>
               <button>Add</button>

               
               
             </div>
           </div>
         );
       })}
     </div>

    </div>
  )
}

export default MensServices
