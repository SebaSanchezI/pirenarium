import { SECTION_IDS, TITLE } from '@global/constants'
import { ImageSlider, SectionComponent } from '@components/index'
import { Slices } from '@components/imageSlider/data'

interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <SectionComponent title={TITLE.MAIN} sectionId={SECTION_IDS.HOME}>
        <ImageSlider slices={Slices} autoPlay width='840px' height='480px'/>
      </SectionComponent>
    </>
  )
}

export default Landing