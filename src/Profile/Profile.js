import { useEffect } from 'react';
import { User } from '../User/User';

export function Profile (props) {
 
  return (
    <div>
      hello {props.userInfo.username} 
      reading now: {props.userInfo.readingNow[0] ? props.userInfo.readingNow[0] : 'nothing'}
    </div>
  )
};

