import React, { useEffect, useState } from 'react'
import {Sidebar, SidebarItemGroup} from 'flowbite-react'
import {HiArrowSmRight, HiUser} from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom';
import { signOutSuccess } from '../redux/user/userslice';
import { useDispatch } from 'react-redux';

export default function DashSidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const[tab, setTab] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search)
      const tabFromUrl = urlParams.get('tab')
      if(tabFromUrl){
        setTab(tabFromUrl);
      }
    },[location.search])
    const handleSignOut = async () =>{
      try {
        const res = await fetch('/api/user/signout', {
          method: 'POST',
        });
        const data = await res.json()
        if(!res.ok){
          console.log(data.message);
        } else {
          dispatch(signOutSuccess())
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={'User'} labelColor='dark'
                onClick={() => navigate('/dashboard?tab=profile')} className='cursor-pointer'>
                    Profile
                </Sidebar.Item>
                <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer' onClick={handleSignOut}>
                    Sign Out
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
