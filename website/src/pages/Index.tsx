import BannerImage from "@/assets/banner.webp"
import BundleSite from "@/assets/bundles.webp"
import CatalogImg from "@/assets/Catalog.webp"
import DeansList from "@/assets/deans_list.webp"
import EpochTimes from "@/assets/epoch_times.webp"

import ShireImg from "@/assets/shire.webp"
import { Nav } from "@/components/Nav"
import { ImageLink } from "../components/Buttons"
import { FAQ } from "../components/FAQ"
import { NewPatron } from "../components/Forms"
import { FrontGallery } from "../components/Galleries"
import { Card, CardContent, CardHeader } from "../components/ui/card"

export function App() {
  return (
    <div>
      <Nav />
      <div className="md:h-48 lg:h-64 w-full m-auto h-32 ">
        <img src={BannerImage} className="w-full h-full object-cover object-center" alt="Watercolor Sketch of the library" fetchPriority="high" />

      </div>
      <main className="py-6 px-4">
        <div className="lg:max-w-5/8 md:max-w-2/3 sm:max-w-full mx-auto leading-loose">

          <h1 className="font-medium justify-center text-center text-5xl pb-6">Plumfield Library</h1>
          <p>Nestled in the heart of Denmark, Wisconsin, Plumfield Living Books Library is a private lending library devoted to cultivating a love of truth, goodness, and beauty through living books. With about 12,000 carefully curated titles, we serve families, educators, and lifelong learners who are passionate about literature-rich education. We have expanded to include a branch in Pulaski, a branch in West DePere is coming in Summer of 2026, and we hope to build branches in several other neighboring counties in the next 2-3 years. We are proud to be a <a href="https://vela.org/" target="_blank">VELA Founder</a>.</p>
          <p>At Plumfield, books are just the beginning. Our vibrant community enjoys a variety of enrichment opportunities, including book clubs, handicrafts classes, workshops for moms, home education curriculum consultation, and creative writing workshops.</p>
          <div className="flex justify-center pb-6">
            <NewPatron className=" w-full mx-auto text-2xl rounded-2xl" />
          </div>
          <p>A note about the cover banner of this website: the artistic rendering of our library was done by an illustrator from the American Essence magazine when our library was featured in the Summer 2025 issue. Used with permission and gratitude. </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 ">

            <ImageLink href="https://www.theepochtimes.com/bright/for-families-a-treasure-trove-of-wholesome-books-5823172" title="Read Article" img={EpochTimes} alt="Epoch Times article feature" />


            <ImageLink href="https://thecardcataloglibrarians.com/the-card-catalog-database/libraries-in-the-news/america-out-loud-news" title="Listen to Podcast" img={DeansList} alt="Dean's List podcast feature" />


          </div>
          <FrontGallery />
          <h2 className="font-medium justify-center text-center text-4xl pb-6">Catalog Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 ">
            <ImageLink href="https://plumfieldcatalog.super.site" title="Bundle Website" img={BundleSite} alt="Bundle website catalog" />
            <ImageLink href="https://www.libib.com/u/plumfieldlibrary" title="Catalog Website" img={CatalogImg} alt="Libib catalog" />
          </div>
          <h2 className="font-medium justify-center text-center text-4xl pb-6">Branches</h2>

          <Card className="max-w-90 w-full md:max-w-full h-full m-auto">
            <CardHeader>
              <div className="w-full h-auto m-0">
                <img src={ShireImg} alt="The Shire Branch location" className="object-cover" loading="lazy" />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-2xl">The Shire Branch</h3>
              <p>Located on South Chase Road in Pulaski, The Shire Branch is a marvelous little branch with about 2,000 books generously hosted by the Maternoski family.</p>
              <ul>
                <li>They are open by Appointment on Thursdays and Saturdays from 12:00-4:00</li>
                <li>When there are handicrafts at the Branch on Fridays, the library will be open.</li>
                <li>To schedule and appointment or find their address, simply log into your Patron Dashboard</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="py-6 font-medium justify-center text-center text-4xl">FAQs</h2>
          <FAQ />

        </div>
      </main>
      <footer className="p-4">
        <a href="/llms.txt" className="font-light text-gray-500 hover:text-black">LLMs.txt</a>
      </footer>
    </div>
  )
}

export default App
