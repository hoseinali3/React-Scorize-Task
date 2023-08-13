import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Tabs.css'
import './Tabs.scss'
import {Countries,Cradit } from '../../Components/Tabs/TabsDetailData';
import {Button, FormControl, InputLabel, MenuItem, Rating, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [country, setCountry] = React.useState(Countries);
  const [crad, setCrad] = React.useState(Cradit);


  const [cValue,setCValue] = React.useState("");
  const [cradValue,setCradValue] = React.useState("");



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <Box sx={{ width: '100%', padding: '1em 0' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}  aria-label="basic tabs example" className='product-detail-tabs'  variant="scrollable"  allowScrollButtonsMobile>
          <Tab label="پذیرش تحصیلی" {...a11yProps(0)} />
          <Tab label="سرمایه گذاری" {...a11yProps(1)} />
          <Tab label="مهاجرت کاری" {...a11yProps(2)} />
          <Tab label="وقت سفارت" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel className="detail-tab-border prod-detail-info" value={value} index={0}>
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="countryID">کشور مورد نظر</InputLabel>
        <Select
          labelId="countryID"
          id="countryID"
          value={cValue}
          
          onChange={e => setCValue(e.target.value)}
          label="کشور مورد نظر"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        {country.map(count =>(
            <MenuItem value={count.title}>{count.title}</MenuItem>
           
        ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="sectionID">مقطع مورد نظر</InputLabel>
        <Select
          labelId="sectionID"
          id="sectionID"
          label="مقطع مورد نظر"
          disabled
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
      
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="fieldID">رشته مورد نظر</InputLabel>
        <Select
          labelId="fieldID"
          id="fieldID"
          disabled
          label="رشته مورد نظر"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
      
        </Select>
      </FormControl>
      <Button className='search-btn-tabs'><SearchIcon/></Button>
      </TabPanel>
      <TabPanel className="detail-tab-border prod-detail-specs" value={value} index={1}>
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="craditID">سرمایه مورد نظر</InputLabel>
        <Select
          labelId="craditID"
          id="craditID"
          value={cradValue}
          
          onChange={e => setCradValue(e.target.value)}
          label="سرمایه مورد نظر"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        {crad.map(cr =>(
            <MenuItem value={cr.value}>{cr.value}</MenuItem>
           
        ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="areaID">حوزه مورد نظر</InputLabel>
        <Select
          labelId="areaID"
          id="areaID"
          label="حوزه مورد نظر"
          disabled
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
      
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="percentID">درصد مورد نظر</InputLabel>
        <Select
          labelId="percentID"
          id="percentID"
          disabled
          label="درصد مورد نظر"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
      
        </Select>
      </FormControl>
      <Button className='search-btn-tabs'><SearchIcon/></Button>

      </TabPanel>
      <TabPanel className="detail-tab-border prod-detail-opinions" value={value} index={2}>
      
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="countryID">کشور مورد نظر</InputLabel>
        <Select
          labelId="countryID"
          id="countryID"
          value={cValue}
          
          onChange={e => setCValue(e.target.value)}
          label="کشور مورد نظر"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        {country.map(count =>(
            <MenuItem value={count.title}>{count.title}</MenuItem>
           
        ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="sectionID">مقطع مورد نظر</InputLabel>
        <Select
          labelId="sectionID"
          id="sectionID"
          label="مقطع مورد نظر"
          disabled
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
      
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="fieldID">رشته مورد نظر</InputLabel>
        <Select
          labelId="fieldID"
          id="fieldID"
          disabled
          label="رشته مورد نظر"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
      
        </Select>
      </FormControl>
      <Button className='search-btn-tabs'><SearchIcon/></Button>

      </TabPanel>
      <TabPanel className="detail-tab-border prod-detail-question-and-answer" value={value} index={3}>
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="countryID">کشور مورد نظر</InputLabel>
        <Select
          labelId="countryID"
          id="countryID"
          value={cValue}
          
          onChange={e => setCValue(e.target.value)}
          label="کشور مورد نظر"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        {country.map(count =>(
            <MenuItem value={count.title}>{count.title}</MenuItem>
           
        ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="sectionID">مقطع مورد نظر</InputLabel>
        <Select
          labelId="sectionID"
          id="sectionID"
          label="مقطع مورد نظر"
          disabled
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
      
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ mx: 1, minWidth: 205 }}>
        <InputLabel id="fieldID">رشته مورد نظر</InputLabel>
        <Select
          labelId="fieldID"
          id="fieldID"
          disabled
          label="رشته مورد نظر"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
      
        </Select>
      </FormControl>
      <Button className='search-btn-tabs'><SearchIcon/></Button>

      </TabPanel>
    </Box>
  );
}