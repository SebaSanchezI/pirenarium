import { SECTION_IDS, TITLE } from '@global/constants'

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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
  const { t } = useTranslation()

  return (
    <>
      <SectionComponent title={t('titles.home')} sectionId={SECTION_IDS.HOME}>
        <ImageSlider slices={Slices} autoPlay width='100%' height='480px' />
      </SectionComponent>
      <SectionComponent title={t('titles.services')} sectionId={SECTION_IDS.SERVICES}>
        <ServicesListCards list={LIST_CARDS} />
      </SectionComponent>
      <SectionComponent title={`${t('titles.rooms')} y ${TITLE.COMMON_SPACES}`} sectionId={SECTION_IDS.ROOMS}>
        <ImageContainer list={IMAGE_ROOM_LIST } />
      </SectionComponent>
      <SectionComponent title={t('titles.faq')} sectionId={SECTION_IDS.FAQ}>
        <AccordionList list={ACCORDION_DATA_LIST}/>
      </SectionComponent>
      <SectionComponent title={t('titles.contact')} sectionId={SECTION_IDS.CONTACT}>
        <Contact />
      </SectionComponent>
    </>
  )
}

export default Landing
