import * as React from 'react';
import HeaderMessage from '../components/HeaderMessage';
import ProfileCard from '../components/ProfileCard';
import Proposal from '../components/Proposal';

export default function Dashboard() {
  return (
    <>
      <HeaderMessage />
    <Proposal />
    <ProfileCard />
    </>


  );
}
