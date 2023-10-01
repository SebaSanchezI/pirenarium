import React, { useState } from 'react'
import { type AccordionItemInterface } from './components/model/accordionItem.type'
import AccordionItem from './components/accordion/AcordionItem'

interface AccordionListProps {
  list: AccordionItemInterface[]
}

interface SelectedItem {
  id: number
  isExpanded: boolean
}

const initialValue: SelectedItem = {
  id: 0,
  isExpanded: false
}

const AccordionList: React.FC<AccordionListProps> = ({ list }) => {
  const [selected, setSelected] = useState<SelectedItem>(initialValue)

  const handleChange = (expanded: boolean, panelId: number) => {
    setSelected({
      id: panelId,
      isExpanded: !expanded
    })
  }

  return (
    <div>
        {list.map((accordion: AccordionItemInterface) => (
          <AccordionItem
            key={accordion.panelId}
            accordionItem={accordion}
            expanded={accordion.panelId === selected.id && selected.isExpanded}
            onChange={handleChange}
          />
        ))
        }
    </div>
  )
}

export default AccordionList
