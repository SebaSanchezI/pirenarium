import { SECTION_IDS } from '@global/constants'

import { ImageSlider, SectionComponent } from '@components/index'
import ServicesListCards from '@components/servicesListCards'

import ImageContainer from '@components/imageList/ImageContainer'
import AccordionList from '@components/accordionList/AcordionList'
import Contact from '@components/contact/Contact'

import { Slices } from '@components/imageSlider/data'
import { IMAGE_ROOM_LIST } from '@components/imageList/data/imageListData'
import { LIST_CARDS } from '@components/servicesListCards/data/data'
import { ACCORDION_DATA_LIST } from '@components/accordionList/data/accordionDataList'
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material'
import { useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
  const homeRef = useRef()
  const serviceRef = useRef()
  const roomsRef = useRef()
  const faqRef = useRef()
  const contactRef = useRef()
  const { t } = useTranslation()

  return (
    <Container
    sx={{ paddingTop: '98px', paddingBottom: '24px' }}
    >
      <SectionComponent title={t('titles.home')} sectionId={SECTION_IDS.HOME} ref={homeRef}>
        <ImageSlider slices={Slices} autoPlay width='100%' height='480px' />
      </SectionComponent>
      <SectionComponent title={t('titles.services')} sectionId={SECTION_IDS.SERVICES} ref={serviceRef}>
        <ServicesListCards list={LIST_CARDS} />
      </SectionComponent>
      <SectionComponent title={`${t('titles.rooms')} y ${t('titles.commonSpaces')}`} sectionId={SECTION_IDS.ROOMS} ref={roomsRef}>
        <ImageContainer list={IMAGE_ROOM_LIST } />
      </SectionComponent>
      <SectionComponent title={t('titles.faq')} sectionId={SECTION_IDS.FAQ} ref={faqRef}>
        <AccordionList list={ACCORDION_DATA_LIST}/>
      </SectionComponent>
      <SectionComponent title={t('titles.booking')} sectionId={SECTION_IDS.BOOKING} ref={contactRef}>
        <Contact />
      </SectionComponent>
    </Container>
  )
}

export default Landing
