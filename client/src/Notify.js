import React from 'react';
import NavBar from './NavBar';

function Notify() {
  return (
    <div>
      <NavBar />
      <div id='third'>
        <div className='container container2'>
          <br /> <hr />
          <div className='card bg-light'>
            <article className='card-body mx-auto'>
              <h4 className='card-title mt-3 text-center'>
                Subscribe to slot alerts
              </h4>
              <p className='text-center'>
                You will be Notified via mail about the vaccine availability.
              </p>

              <form>
                <div className='form-group input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      {' '}
                      <i className='fa fa-user'></i>{' '}
                    </span>
                  </div>
                  <input
                    name=''
                    id='pinInput'
                    className='form-control'
                    placeholder='Pin Code'
                    type='number'
                    required
                  />
                </div>
                <div className='form-group input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      {' '}
                      <i className='fa fa-envelope'></i>{' '}
                    </span>
                  </div>
                  <input
                    name=''
                    id='mailInput'
                    className='form-control'
                    placeholder='Email address'
                    type='email'
                    required
                  />
                </div>
                <div className='form-group input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      {' '}
                      <i className='fa fa-phone'></i>{' '}
                    </span>
                  </div>
                  <select
                    className='custom-select'
                    style={{ maxWidth: '120px' }}
                  >
                    <option defaultValue=''>+91</option>
                    <option value='1'>+972</option>
                    <option value='2'>+198</option>
                    <option value='3'>+701</option>
                  </select>
                  <input
                    name=''
                    className='form-control'
                    placeholder='Phone number'
                    type='number'
                    requi
                  />
                </div>
                <div className='form-group input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      {' '}
                      <i className='fa fa-building'></i>{' '}
                    </span>
                  </div>
                  <select className='form-control' id='ageInput'>
                    <option defaultValue=''> Select Age Group</option>
                    <option>18-45</option>
                    <option>45+</option>
                  </select>
                </div>
                <div className='form-group'>
                  <button
                    type='submit'
                    className='btn sign_button btn-block'
                    id='submitBtn'
                  >
                    {' '}
                    Subscribe{' '}
                  </button>
                </div>
                <p id='demo'></p>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notify;
