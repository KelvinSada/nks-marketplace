import ComponentMenu from "../components/common/ComponentMenu"
import DisplaySection from "../components/common/DisplaySection"
import ItemsProviders from "../providers/ItemsProviders"
import SelectedItemsProvider from "../providers/SelectedItemsProvider"


const Home = () => {

  return (
    <ItemsProviders>
      <SelectedItemsProvider>
        <ComponentMenu/>
        <DisplaySection/>
      </SelectedItemsProvider>
    </ItemsProviders>
  )
}

export default Home
