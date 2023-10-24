import { PropsWithChildren, createContext, useContext, useState } from 'react';

// HW - HomeWOrk
export interface IHWContext {
  github: string;
  setGitHub?: (link: string) => void;
}

export const HWContext = createContext<IHWContext>({
  github: '',
});

export const HWContextProvider = ({
  github,
  children,
}: PropsWithChildren<IHWContext>): JSX.Element => {
  const [gitHubState, setGtHubState] = useState<string>(github);

  const setGitHub = (link: string) => {
    setGtHubState(link);
  };

  return (
    <HWContext.Provider value={{ github: gitHubState, setGitHub }}>
      {children}
    </HWContext.Provider>
  );
};

export const useHMContext = () => useContext(HWContext);
