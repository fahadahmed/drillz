import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { AppContext } from '../AppProvider';
import { auth } from '../../config/firebase';

const SideBarContainer = styled.div`
  background: #999;
  padding: 8px;
`;

const AREAS = ['Skills', 'Wealth', 'Health', 'Mind', 'Faith', 'Social'];
const PREFERENCES = ['Settings', 'Profile'];

function SideNavigation() {
  const { currentUser } = useContext(AppContext);
  return (
    <SideBarContainer>
      <p>{currentUser.displayName}</p>
      <h6>AREAS</h6>
      {AREAS.map((area) => (
        <li key={area}>{area}</li>
      ))}
      <h6>PREFERENCES</h6>
      {PREFERENCES.map((option) => (
        <li key={option}>{option}</li>
      ))}
      <button onClick={() => auth.signOut()}>Log out</button>
    </SideBarContainer>
  );
}

export default SideNavigation;
