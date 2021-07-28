import React from 'react'
import { Link } from 'react-router'
import * as R from 'ramda'
import { Progress } from '@zendeskgarden/react-loaders'

import s from './main.css'

const Container = ({ event, isLink, children, onClick }) => {
  // When this is rendered on the Calendar, we want it to trigger a popover. When it is
  // rendered on the admin dashboard, we want a link.
  if (isLink) {
    return <Link to={`/portal/events/${event.id}`}>{children}</Link>
  } else {
    return <div onClick={onClick}>{children}</div>
  }
}

const Event = ({ event, isLink, addPopover, onClick }) => (
  <Container className={s.event} event={event} isLink={isLink} onClick={onClick}>
    <span className={s.title}>{event.title}</span>
    <Progress
      value={(R.clamp(0, 100, event.signupCount / event.capacity) || 0) * 100.0}
      color="#30aabc"
    />
  </Container>
)

export default Event
