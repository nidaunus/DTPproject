import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi'

export const LeftMenuData = [
  {
    title: 'E-Defter',
    path:'/',
    icon: <FaIcons.FaHandshake />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Defter Veri Takip Ekranı',
        path: '/veriTakip',
        icon: <FaIcons.FaHandshake />,
        cName: 'sub-nav'
      },
      {
        title: 'E-Defter Uygulamasına Git',
        path: '/Uyg',
        icon: <FaIcons.FaHandshake />,
        cName: 'sub-nav'
      },
      {
        title: 'Hesap Kodu Ekleme İşlemleri',
        path: '/Hesao-Kodu-Ekle',
        icon: <FaIcons.FaUpload />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Yonetim',
    path:'/',
    icon: <FaIcons.FaPencilAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav:
      [
        {
          title: 'E-Posta Tanımlama',
          path: '/e-posta',
          icon: <BiIcons.BiAt />,
          cName: 'sub-nav'
        }
      ]
  }


]