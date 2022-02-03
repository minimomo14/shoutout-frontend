import React from 'react';
import ShoutResult from './ShoutResult';
import { Shoutouts } from '../models/ShoutOut';

interface Props {
    shouts: Shoutouts[];
}

export default function ShoutList({shouts}:Props) {
  return (
  <div className='ShoutList'>
      {shouts.map((shout,i) => <ShoutResult key={i} shout={shout} />)}
  </div>);
};
