'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

interface PageLoaderProps {
    children: React.ReactNode;
  }
  
  const PageLoader: React.FC<PageLoaderProps> = ({ children }) => {

  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="purple"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default PageLoader;