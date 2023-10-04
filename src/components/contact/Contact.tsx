import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { BOOK_LINKS, CONTACT_DATA, CONTACT_TITLES } from './data/contactData'

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems='flex-start'
      justifyContent='space-between'
      marginBottom='32px'
    >
      <Grid xs={12} sm={12} md={5} lg={4}>
        <Typography variant='h6' fontWeight={600}>{CONTACT_TITLES.ADDRESS}</Typography>
        <Typography variant='h6' color='primary' fontWeight={600} marginBottom='8px'>{CONTACT_DATA.ADDRESS}</Typography>
        <Typography variant='h6' fontWeight={600}>{CONTACT_TITLES.PHONE}</Typography>
        <Typography variant='h6' color='primary' fontWeight={600} marginBottom='8px'>{CONTACT_DATA.PHONE}</Typography>
        <Typography variant='h6' fontWeight={600}>{CONTACT_TITLES.EMAIL}</Typography>
        <Typography variant='h6' color='primary' fontWeight={600} marginBottom='8px'>{CONTACT_DATA.EMAIL}</Typography>
      </Grid>
      <Grid xs={12} sm={12} md={5} lg={6}>
        <Typography variant='h6' fontWeight={600}>{CONTACT_TITLES.MAP}</Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.279137982693!2d-0.3616663813590915!3d42.506875675362586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd58211f7a9de001%3A0x249d09d8e87639c7!2sAlbergue%20-%20Hostel%20Pirenarium!5e0!3m2!1ses-419!2sit!4v1696323612246!5m2!1ses-419!2sit"
          width='100%'
          height='300px'
          style={{ border: 0 }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Pirenarium Ubication'
          id='map'
          ></iframe>
      </Grid>
      <Grid xs={12} sm={12} md={2} lg={2}>
        <Typography variant='h6' marginBottom='8px' fontWeight={600}>{CONTACT_TITLES.BOOKING}</Typography>
        <Box display='flex' flexDirection='column'>
          <Link
            href={BOOK_LINKS.BOOKING.url}
            underline='hover'
            target='_blank'
            rel='noopener'
            marginBottom='8px'
            fontSize='20px'
            fontWeight={600}
          >
            {BOOK_LINKS.BOOKING.name}
          </Link>
          <Link
            href={BOOK_LINKS.DIRECT_BOOK.url}
            underline='hover'
            target='_blank'
            rel='noopener'
            marginBottom='8px'
            fontSize='20px'
            fontWeight={600}
          >
            {BOOK_LINKS.DIRECT_BOOK.name}
          </Link>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Contact
