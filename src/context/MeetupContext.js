import React from 'react'

const MeetupContext = React.createContext({
  name: 'Welcome to Meetup',
  topic: 'Please register for the topic',
  register: true,
  changeUserData: () => {},
})
export default MeetupContext
