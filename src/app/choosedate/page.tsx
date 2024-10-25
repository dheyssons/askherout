'use client'

import {motion} from 'framer-motion'

import { Heading } from "@chakra-ui/react"

import { useState } from 'react';

import {Button} from '@chakra-ui/react'

import {Poppins} from 'next/font/google'
import Link from 'next/link';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-poppins'
})

export default function ChooseDatePage() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="flex flex-col justify-center items-center w-full h-full gap-y-12">
            <motion.div>
                <Heading letterSpacing={'widest'} fontFamily={''} color={'black'}>Escolha o dia e hora que você possa ir</Heading>
            </motion.div>

            <form>
                <input className={poppins.className} type='datetime-local' ></input>
            </form>

            <Button className='ybutton' bg={'red.500'} color={'white'} letterSpacing={'widest'}>
                <Link href={'/'}>Confirmar</Link>
                  <img className='ybutton__1' width={32} src="/img/heart(1).png"></img>
                  <img className='ybutton__2' width={32} src="/img/heart(2).png"></img>
                  <img className='ybutton__3' width={32} src="/img/heart(3).png"></img>
                  <img className='ybutton__4' width={32} src="/img/heart(4).png"></img>
            </Button>
        </div>
    )
}