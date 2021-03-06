import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './Route';
import { AuthProvider } from './AuthProvider';

/**
 * Wrap all providers here
 */

export default function Providers() {
  return (
    <PaperProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </PaperProvider>
  );
}