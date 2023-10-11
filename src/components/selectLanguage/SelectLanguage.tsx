import React, { useEffect, useState } from 'react'
import i18next from 'i18next'

import { Box, FormControl, MenuItem } from '@mui/material'
import Select, { type SelectChangeEvent } from '@mui/material/Select'

import { type Language } from './model/language.type'

interface SelectLanProps {
  languages: Language[]
}

const SelectLanguage: React.FC<SelectLanProps> = ({ languages }) => {
  const [language, setLanguage] = useState<string>('')
  const handleChangeLan = async (event: SelectChangeEvent): Promise<void> => {
    setLanguage(event.target.value)
    await i18next.changeLanguage(event.target.value)
  }

  useEffect(() => {
    const lang = localStorage.getItem('i18nextLng')
    setLanguage(lang ?? '')
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
        >
          {
            languages.map(({ id, value, label }: Language) => (
              <MenuItem
                key={id}
                value={value}
              >
                {label}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectLanguage
