import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import FolderIcon from '@mui/icons-material/Folder';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
export const mainNavbarItems=[
    {
        id:0,
        Icon:<PeopleIcon/>,
        Label:'Authentication',
        route:'authentication'
    },
    {
        id:1,
        Icon:<StorageIcon/>,
        Label:'Database',
        route:'database'
    },   
    {
        id:2,
        Icon:<FolderIcon/>,
        Label:'Storage',
        route:'storage'
    }, 
    {
        id:3,
        Icon:<PublicIcon/>,
        Label:'Hosting',
        route:'hosting'
    },
    {
        id:4,
        Icon:<SettingsEthernetIcon/>,
        Label:'Functions',
        route:'functions'
    },
    {
        id:5,
        Icon:<CastForEducationIcon/>,
        Label:'Machine Learning',
        route:'machine_learning'
    }
]