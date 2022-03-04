import Search from "./Search"

const Body = () => {
  return (
      // flex-grow allows the Body - middle section to take up as much space as possible
    <section className="bg-black ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5"> 
        <Search />
        </section>
  )
}

export default Body