import { SECTION_IDS, TITLE } from '@global/constants'
import { ImageSlider, SectionComponent } from '@components/index'
import { Slices } from '@components/imageSlider/data'

interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <SectionComponent title={TITLE.MAIN} sectionId={SECTION_IDS.HOME}>
        <ImageSlider slices={Slices} autoPlay width='100%' height='480px' />
      </SectionComponent>
      <SectionComponent title={TITLE.SERVICES} sectionId={SECTION_IDS.SERVICES}>
      </SectionComponent>
      <SectionComponent title={TITLE.ROOMS} sectionId={SECTION_IDS.ROOMS}>
      </SectionComponent>
      <SectionComponent title={TITLE.FAQ} sectionId={SECTION_IDS.FAQ}>
      </SectionComponent>
      <SectionComponent title={TITLE.CONTACT} sectionId={SECTION_IDS.CONTACT}>
      </SectionComponent>
    </>
  )
}

export default Landing
