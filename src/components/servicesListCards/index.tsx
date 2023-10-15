import { Grid } from '@mui/material'
import React from 'react'
import { type ServiceCardInterface } from '@components/servicesListCards/models/serviceCard.type'
import ServiceCard from './components/ServiceCard'
import { useTranslation } from 'react-i18next'

interface ListCardsProps {
  list: ServiceCardInterface[]
}

const ServicesListCards: React.FC<ListCardsProps> = ({ list }) => {
  const { t } = useTranslation()
  return (
    <Grid container alignItems='center' justifyContent='center' padding='0 32px'>
      {
        list.length > 0 &&
        list.map((card, idx) => (
          <ServiceCard
            key={idx}
            title={t(`section.services.${card.title}.title`)}
            description={t(`section.services.${card.title}.description`)}
            icon={card.icon}
          />
        ))
      }
    </Grid>
  )
}

export default ServicesListCards
