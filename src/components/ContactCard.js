import React  from 'react';

const ContactCard = (props)=> {
    const{id, name, number} = props.contact;
 
    return (
        <div className='item'>
        <div className='content'>
            <div className='header'>
                {name}

            </div>
            <div>
                {number}

            </div>

        </div>
        <i 
        className='trash alternate outline icon' 
        >
        </i>
    </div>
    )
  
}


export default ContactCard;
