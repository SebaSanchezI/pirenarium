import React, { useEffect, useState } from 'react'
import i18next from 'i18next'

import { Box, FormControl, ListItemText, MenuItem } from '@mui/material'
import Select, { type SelectChangeEvent } from '@mui/material/Select'

import { type Language } from './model/language.type'
import { FlagImage } from './styles/styles'

interface SelectLanProps {
  languages: Language[]
}

const SelectLanguage: React.FC<SelectLanProps> = ({ languages }) => {
  const [language, setLanguage] = useState<string>('')
  const [selectedLan, setSelectedLan] = useState<Language | undefined>()

  const handleChangeLan = async (event: SelectChangeEvent): Promise<void> => {
    const wanted = languages.find(l => l.value === event.target.value) ?? languages[0]
    setSelectedLan(wanted)
    setLanguage(event.target.value)
    await i18next.changeLanguage(event.target.value)
  }

  useEffect(() => {
    const lang = localStorage.getItem('i18nextLng')
    setLanguage(lang ?? '')
    const wanted = languages.find(l => l.value === lang) ?? languages[0]
    setSelectedLan(wanted)
  }, [])

  return (
    <Box sx={{ width: '100px' }}>
      <FormControl variant="standard">
        <Select
          labelId="language-select-label"
          id="language-select"
          value={language}
          label='Language'
          onChange={handleChangeLan}
          type='outlined'
          autoWidth
          renderValue={() => <FlagImage src={selectedLan?.flagImg} alt={`flag-${selectedLan?.value}`} />}
        >
          {
            languages.map(({ id, value, label, flagImg }: Language) => (
              <MenuItem
                key={id}
                value={value}
                sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}
              >
                <FlagImage src={flagImg} alt={`flag-${label}`} />
                <ListItemText sx={{ marginLeft: '16px' }}>{label}</ListItemText>
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectLanguage
