import React from 'react';
import { Router } from 'wouter';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react';
import HasuraConnector from './utils/hasuraConnector.jsx';
import MainUI from './pages/mainUI.jsx';

const frontendApi = 'clerk.perfect.chipmunk-14.lcl.dev';

export default function App() {
  return (
    <ClerkProvider frontendApi={frontendApi}>
      <HasuraConnector>
        <Router>
          <SignedIn>
            <MainUI>

            </MainUI>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </Router>
      </HasuraConnector>
    </ClerkProvider>
  );
}
