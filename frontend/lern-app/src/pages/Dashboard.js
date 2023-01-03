import * as React from 'react';
import ContactList from '../components/ContactList'
import HeaderMessage from '../components/HeaderMessage';
import ProfileCard from '../components/ProfileCard';

export default function Dashboard() {
  return (
    <>
    < ContactList />
    <ProfileCard />
    <HeaderMessage />
    </>


  );
}
