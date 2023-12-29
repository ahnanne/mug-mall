import React from 'react';

type LoadingDecoratorProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

const LoadingDecorator = ({ isLoading, children }: LoadingDecoratorProps) => (
  <div className="loading-decorator">
    {isLoading && <p aria-busy="true">loading...</p>}
    {!isLoading && children}
  </div>
);

export default LoadingDecorator;
