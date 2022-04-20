import Switch from '@mui/material/Switch';
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function SwitchButton({setModoClaro}){
    return <Switch
    checkedIcon={<LightModeIcon sx={{padding: '2px',fontSize:'1.5rem', backgroundColor: '#b9b9b9', borderRadius: '100%', color: '#383838'}}/>}
    icon={<DarkModeIcon sx={{padding: '2px',fontSize:'1.5rem', backgroundColor: '#383838', borderRadius: '100%'}}/>}
    onClick={() => setModoClaro((prev) => !prev)}
    sx={{'height':'41px',
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#b9b9b9',
    }
    }}
  />
}