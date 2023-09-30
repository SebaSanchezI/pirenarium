import { Grid } from '@mui/material'
import React from 'react'
import { type ServiceCardInterface } from '@components/servicesListCards/models/serviceCard.type'
import ServiceCard from './components/ServiceCard'

interface ListCardsProps {
  list: ServiceCardInterface[]
}

const ServicesListCards: React.FC<ListCardsProps> = ({ list }) => {
  return (
    <Grid container alignItems='center' justifyContent='center' padding='0 32px'>
      {
        list.length > 0 &&
        list.map((card, idx) => (
          <ServiceCard
            key={idx}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))
      }
    </Grid>
  )
}

export default ServicesListCards
