import * as React from 'react';
import Button from 'react-bootstrap/Button';

function Product() {

  return (
    <div className='Product-Container '>
      <img 
        className='Image-Product'
        src={require('../img/foto1.png')}
        alt='Álbum 1'
      />
      <h1 className='Title-Product'>Álbum 1</h1>
      <h2 className='Subtitle-Product'>Subtitle</h2>
      <h4 className='Price-Product'> 150 &nbsp;</h4>
      <Button variant="primary" size='lg'>Primary</Button>{' '}
    </div>
  );
  
}

export default Product;