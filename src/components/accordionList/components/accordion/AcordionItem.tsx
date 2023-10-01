import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { type AccordionItemInterface } from '../model/accordionItem.type'

interface AccordionItemProps {
  accordionItem: AccordionItemInterface
  expanded: boolean | undefined
  onChange: (expanded: boolean | undefined, panelId: number) => void
}

const AccordionItem: React.FC<AccordionItemProps> = ({ accordionItem, expanded, onChange }) => {
  const { panelId, title, description } = accordionItem

  return (
    <Accordion expanded={expanded} onChange={() => { onChange(expanded, panelId) }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1bh-content'
        id='panel1bh-header'
      >
        <Typography sx={{ flexShrink: 0 }} variant='h6'>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {description}
        </Typography>
      </AccordionDetails>
  </Accordion>
  )
}

export default AccordionItem
