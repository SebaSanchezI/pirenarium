import { SECTION_IDS, TITLE } from '@global/constants'
import { ImageSlider, SectionComponent } from '@components/index'
import { Slices } from '@components/imageSlider/data'
import ServicesListCards from '@components/servicesListCards'
import { LIST_CARDS } from '@components/servicesListCards/data/data'
import ImageContainer from '@components/imageList/ImageContainer'

interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <SectionComponent title={TITLE.MAIN} sectionId={SECTION_IDS.HOME}>
        <ImageSlider slices={Slices} autoPlay width='100%' height='480px' />
      </SectionComponent>
      <SectionComponent title={TITLE.SERVICES} sectionId={SECTION_IDS.SERVICES}>
        <ServicesListCards list={LIST_CARDS} />
      </SectionComponent>
      <SectionComponent title={TITLE.ROOMS} sectionId={SECTION_IDS.ROOMS}>
        <ImageContainer />
      </SectionComponent>
      <SectionComponent title={TITLE.FAQ} sectionId={SECTION_IDS.FAQ}>
      </SectionComponent>
      <SectionComponent title={TITLE.CONTACT} sectionId={SECTION_IDS.CONTACT}>
      </SectionComponent>
    </>
  )
}

export default Landing
