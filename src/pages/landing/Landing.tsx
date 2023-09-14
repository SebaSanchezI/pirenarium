import { SECTION_IDS, TITLE } from '@global/constants'
import SectionComponent from '@components/article/SectionComponent'

type LandingProps = {}

const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <SectionComponent title={TITLE.MAIN} sectionId={SECTION_IDS.HOME}>

      </SectionComponent>
    </>
  )
}

export default Landing