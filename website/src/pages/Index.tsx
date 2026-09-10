import BannerImage from "@/assets/banner.webp"
import BundleSite from "@/assets/bundles.webp"
import CatalogImg from "@/assets/Catalog.webp"
import DeansList from "@/assets/deans_list.webp"
import EpochTimes from "@/assets/epoch_times.webp"
// @ts-expect-error: ts(2307) - TS HATES vite-imagetools imports
import MainImg from "@/assets/main.png?format=avif"
import ShireImg from "@/assets/shire.webp"
import { Nav } from "@/components/Nav"
import { ImageLink } from "../components/Buttons"
import { FAQ } from "../components/FAQ"
// import { NewPatron } from "../components/Forms"
import { FrontGallery } from "../components/Galleries"
import { Card, CardContent, CardHeader } from "../components/ui/card"

export function App() {
  return (
    <div>
      <Nav />
      <div className="m-auto h-32 w-full md:h-48 lg:h-64">
        <img
          src={BannerImage}
          className="h-full w-full object-cover object-center"
          alt="Watercolor Sketch of the library"
          fetchPriority="high"
        />
      </div>
      <main className="px-4 py-6">
        <div className="mx-auto leading-loose sm:max-w-full md:max-w-2/3 lg:max-w-5/8">
          <h1 className="justify-center pb-6 text-center text-5xl font-medium">
            Plumfield Library
          </h1>
          <p className="pt-4">
            Nestled in the heart of Denmark, Wisconsin, Plumfield Living Books
            Library is a private lending library devoted to cultivating a love
            of truth, goodness, and beauty through living books. With about
            12,000 carefully curated titles, we serve families, educators, and
            lifelong learners who are passionate about literature-rich
            education. We have expanded to include a branch in Pulaski and we
            hope to build branches in several other neighboring counties in the
            next 2-3 years. We are proud to be a{" "}
            <a href="https://vela.org/" target="_blank">
              VELA Founder
            </a>
            .
          </p>
          <p>
            At Plumfield, books are just the beginning. Our vibrant community
            enjoys a variety of enrichment opportunities, including book clubs,
            handicrafts classes, workshops for moms, home education curriculum
            consultation, and creative writing workshops.
          </p>
          {/* <div className="flex justify-center pb-6">
            <NewPatron className=" w-full mx-auto text-2xl rounded-2xl" />
          </div> */}
          <p>
            A note about the cover banner of this website: the artistic
            rendering of our library was done by an illustrator from the
            American Essence magazine when our library was featured in the
            Summer 2025 issue. Used with permission and gratitude.{" "}
          </p>
          <div className="grid grid-cols-1 gap-6 pb-6 sm:grid-cols-2">
            <ImageLink
              href="https://www.theepochtimes.com/bright/for-families-a-treasure-trove-of-wholesome-books-5823172"
              title="Read Article"
              img={EpochTimes}
              alt="Epoch Times article feature"
            />

            <ImageLink
              href="https://thecardcataloglibrarians.com/the-card-catalog-database/libraries-in-the-news/america-out-loud-news"
              title="Listen to Podcast"
              img={DeansList}
              alt="Dean's List podcast feature"
            />

          </div>
          <FrontGallery />
          <h2 className="justify-center pb-6 text-center text-4xl font-medium">
            Catalog Options
          </h2>
          <div className="grid grid-cols-1 gap-6 pb-6 sm:grid-cols-2">
            <ImageLink
              href="https://plumfieldcatalog.super.site"
              title="Bundle Website"
              img={BundleSite}
              alt="Bundle website catalog"
            />
            <ImageLink
              href="https://www.libib.com/u/plumfieldlibrary"
              title="Catalog Website"
              img={CatalogImg}
              alt="Libib catalog"
            />
          </div>
          <h2 className="justify-center pb-6 text-center text-4xl font-medium">
            Branches
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card className="m-auto h-full w-full md:max-w-full">
              <CardHeader>
                <div className="m-0 h-auto w-full">
                  <img
                    src={MainImg}
                    alt="The Main Branch location"
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl">The Main Library</h3>
                <p>
                  Plumfield’s Main Library is our original location, nestled in the Masarik family home in Denmark and filled with the living books at the heart of our community. Families visit to browse and borrow, attend classes and clubs, and spend time together in a warm, home-like setting.
                </p>
                <ul>
                  <li>
                    We are open by Appointment on Thursdays 12:00 - 7:00, and
                    some Tuesdays
                  </li>
                  <li>
                    To schedule and appointment or find their address, simply
                    log into your Patron Dashboard
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="m-auto h-full w-full md:max-w-full">
              <CardHeader>
                <div className="m-0 h-auto w-full">
                  <img
                    src={ShireImg}
                    alt="The Shire Branch location"
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-2xl">The Shire Branch</h3>
                <p>
                  Located on South Chase Road in Pulaski, The Shire Branch is a
                  marvelous little branch with about 2,000 books generously
                  hosted by the Maternoski family.
                </p>
                <ul>
                  <li>
                    They are open by Appointment on Thursdays and Saturdays from
                    12:00-4:00
                  </li>
                  <li>
                    When there are handicrafts at the Branch on Fridays, the
                    library will be open.
                  </li>
                  <li>
                    To schedule and appointment or find their address, simply
                    log into your Patron Dashboard
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <h2 className="justify-center py-6 text-center text-4xl font-medium">
            FAQs
          </h2>
          <FAQ />
          {/* <h2 id="doterra" className="py-6 font-medium justify-center text-center text-4xl">doTerra</h2>
          <p>Below you can order doTerra oils through the library at the wholseale discount</p>
          <div className="flex items-center justify-center">
            <DoTerraButton />
          </div> */}
        </div>
      </main>
      <footer className="p-4">
        <a
          href="/llms.txt"
          className="font-light text-gray-500 hover:text-black"
        >
          LLMs.txt
        </a>
      </footer>
    </div>
  )
}

export default App
