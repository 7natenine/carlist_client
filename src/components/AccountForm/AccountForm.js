import React, { Component } from 'react'
import { Button, Input, Section, Image, InputFile } from '../Utils/Utils'

/* 
// section 1 
// Welcome message
// displays image
// button to change image
// location (optional)
*/

/* 
// section 2
// view listings
// edit listing
*/

/* 
// section 3
// Label and button for edit username
// Label and button for edit password
*/


export default class AccountForm extends Component { 

  state = { error: null }

  render() { 

    return (
      <Section className='account-form'>
        <div className='user-info'>
          <h2>Welcome "username"</h2>
          <Image src='' className='user-image'></Image>
          <InputFile type="file" name="carImage" accept=".png,.jpg,.jpeg">
          </InputFile>
          <Input type="submit" className="photoSubmit" value="Submit"/>
          <Input type="reset" className="photoReset" value="Reset"/>
        </div>
        <div className='my-listing'>
          <h3>current listings</h3>
            <div id="user-listing-container">
              <div id="Ads"></div>
            </div>
        </div> 
        <div className='settings'>
          <h3>Change username</h3>
          <Input type="text" className="userName-edit" placeholder={}/>
          <Button type="submit">
            Submit
          </Button>
          <h3>Change password</h3>
          <Input type="text" className="userName-edit" />
          <Button type="submit">
            Submit
          </Button>
        </div> 
      </Section>
    )
  }
}