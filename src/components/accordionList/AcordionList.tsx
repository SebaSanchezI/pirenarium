import React, { useState } from 'react'
import { type AccordionItemInterface } from './components/model/accordionItem.type'
import AccordionItem from './components/accordion/AcordionItem'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const [selected, setSelected] = useState<SelectedItem>(initialValue)

  const handleChange = (expanded: boolean, panelId: number) => {
    setSelected({
      id: panelId,
      isExpanded: !expanded
    })
  }

  return (
    <div>
        {list.map(({ panelId }: AccordionItemInterface) => (
          <AccordionItem
            key={panelId}
            accordionItem={{
              panelId,
              title: t(`section.faq.panelId${panelId}.title`),
              description: t(`section.faq.panelId${panelId}.description`)
            }}
            expanded={panelId === selected.id && selected.isExpanded}
            onChange={handleChange}
          />
        ))
        }
    </div>
  )
}

export default AccordionList
