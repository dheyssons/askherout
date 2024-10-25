'use client'

import { Link } from '@chakra-ui/next-js'

import {Pacifico} from 'next/font/google'
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico'
})

//chakra components
import { Box } from "@chakra-ui/react"
import { Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

//framer animations
import { motion } from 'framer-motion'
import { transition1 } from '../../public/transitions/transition1'
import { lefttoright } from '../../public/variants/lefttoright'
import { righttoleft } from '../../public/variants/righttoleft'
import { fade } from '../../public/variants/fade'

let index = 0;

 
function changeNoButtonPosition() {
  let nobutton = document.querySelector('.nobutton');
  nobutton!.setAttribute('style', `position: absolute; left: ${Math.round(Math.random() * 80)}%; top: ${Math.round(Math.random() * 80)}%;`)

  index++;
  if(index > 3) {
    let mainheading = document.querySelector('.mainheading');
    mainheading!.textContent = 'Qual é a tua hein?!'
  }
}

const setIsLoading = () => {
  let ybutton = document.querySelector('.ybutton');
  ybutton!.setAttribute('style', 'display: none');
  let ybutton_loading = document.querySelector('ybutton_loading');
  ybutton_loading!.classList.remove('hidden')
}

export default function Home() {
  return (
      <motion.div initial="variantInit" whileInView="variantAnim" variants={fade} transition={transition1} className={` flex flex-row justify-center items-center w-full h-full`}>
        <Box className={`${window.screen.orientation.type !== 'landscape-primary' ? 'flex': 'hidden'} flex flex-col justify-center items-center`}>
          <Heading textAlign={'center'} size={'md'} color={'#fff200'}>Você é teimosa hein. Acesse por um computador, por favor</Heading>
        </Box>
        {/* main content */}
        <Box className={`${window.screen.orientation.type !== 'landscape-primary' ? 'hidden': 'flex'} flex flex-col justify-around items-center rounded-2xl`} m={2} width="960px" height={"480px"} mx="auto" color='#ffffff'>
          <div className='relative'>
            <Heading className='mainheading' as='h1' letterSpacing={'widest'} size='2xl' fontFamily={''} color={'black'} mb={'4'}>Quer sair comigo?</Heading>
            {/* <Heading as='h4' letterSpacing={'widest'} size={'sm'} fontFamily={''} color={'black'} position={'absolute'} right={'0px'}>(como amigo)</Heading> */}
          </div>

            <div className='flex flex-row gap-x-10'>
              <motion.div variants={lefttoright} initial="variantInitial" whileInView="variantAnim" transition={transition1}>
                <Button onClick={() => setIsLoading()} className='ybutton' size={'lg'} mr={10} bg={'red.500'} color={'#f1f1f1'}>
                  <Link onClick={() => setIsLoading()} href='/choosedate'>Sim</Link>
                  <img className='ybutton__1' width={32} src="/img/heart(1).png"></img>
                  <img className='ybutton__2' width={32} src="/img/heart(2).png"></img>
                  <img className='ybutton__3' width={32} src="/img/heart(3).png"></img>
                  <img className='ybutton__4' width={32} src="/img/heart(4).png"></img>
                </Button>
                <Button isLoading className='ybutton_loading' size={'lg'} mr={10} bg={'red.500'} color={'#f1f1f1'} display={'none'}>
                  Sim
                </Button>
              </motion.div>
              <motion.div className='nobutton' variants={righttoleft} initial="variantInitial" whileInView="variantAnim" transition={transition1}>
                <Button size={'lg'} onMouseOver={() => changeNoButtonPosition()} onClick={() => changeNoButtonPosition()} className='nobutton' bg={'black'} color={'white'} >Não</Button>
              </motion.div>
            </div>
        </Box>
      </motion.div>

    //<Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}> 
    //</Link>
  ) 
}