import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { photos } from "@/photos"
import Autoplay from "embla-carousel-autoplay"

// const GalleryImage = ({ src, alt }: { src: string, alt: string }) => (
//     <img src={src} alt={alt} className=" w-7/8 object-contain h-full block m-auto" />
// )

export const FrontGallery = () => (
    <div className="p-6">
        <Carousel plugins={[
            Autoplay({
                delay: 3500,
            }),
        ]}
            className="m-auto block"
            opts={{ loop: true }}>
            <CarouselContent className="p-0">
                {photos.map((src, i) => (
                    <CarouselItem key={i} className="flex justify-center items-center h-100 pl-4 pr-0">
                        <img src={src} key={i} alt={`Photo ${i + 1}`} />
                    </CarouselItem>
                ))}
                {/* <CarouselItem className="flex justify-center items-center h-100 pl-4 pr-0">

                    <GalleryImage src={gallery1} alt="Gallery photo 1" />

                </CarouselItem>
                <CarouselItem className="flex justify-center items-center h-100 pl-4 pr-0">

                    <GalleryImage src={gallery2} alt="Gallery photo 2" />

                </CarouselItem> */}

            </CarouselContent>
            {/*<CarouselPrevious />
        <CarouselNext />*/}
        </Carousel>
    </div>
)