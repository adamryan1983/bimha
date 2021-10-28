interface roster {
  id: number
  name: string
  dob: string
  jersey: number
  status: boolean
}

interface schedule {
  id: number
  title: string
  type: string
  location: string
  opponent: string
  date: string
  time: string
  status: boolean
}

interface IDivisionContext {
  division: string;
  setDivision: () => void;
}

const defaultState = {
  division: 'timbits',
};

const ThemeContext = React.createContext<IThemeContext>(defaultState);