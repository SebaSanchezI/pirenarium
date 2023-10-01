import * as React from 'react'
import { type AccordionItemInterface } from './components/model/accordionItem.type'
import AccordionItem from './components/accordion/AcordionItem'

interface AccordionListProps {
  list: AccordionItemInterface[]
}

interface SelectedItem {
  id: number
  isExpanded?: boolean
}

const AccordionList: React.FC<AccordionListProps> = ({ list }) => {
  const [selected, setSelected] = React.useState<SelectedItem | null>(null)

  const handleChange = (expanded: boolean | undefined, panelId: number) => {
    setSelected({
      id: panelId,
      isExpanded: expanded
    })
  }

  return (
    <div>
        {list.map((accordion: AccordionItemInterface) => (
          <AccordionItem
            key={accordion.panelId}
            accordionItem={accordion}
            expanded={selected?.isExpanded}
            onChange={handleChange}
          />
        ))
        }
    </div>
  )
}

export default AccordionList
