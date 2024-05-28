import LogoutButton from '@/components/adminComponents/buttons/LogoutButton'
import { permanentRedirect } from 'next/navigation'


const Dashboard = () => {
//   return permanentRedirect("/")
    return <LogoutButton />
}

export default Dashboard